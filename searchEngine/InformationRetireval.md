# Simple Search Engine with Apache Lucene

## Abstract
This tutorial focuses on building a search engine with apache lucene and we discuss the concepts of precision and recall. Lucene is a open source information retrieval library, in this tutorial we will be using lucene with java.

### Prerequisites
Instructions for using lucene
In this tutorial I'm using eclipse IDE

* Make sure you have java installed on your system and path are configured
* You can download java jdk from [here](https://www.java.com/en/download/)
* You can download eclipse from [here](https://www.eclipse.org/downloads/packages/release/neon/2/eclipse-ide-java-developers)
* You can download apache Lucene from [here](https://lucene.apache.org/core/downloads.html)
* Unzip and store the folder in your desired directory

### Import JARs to your project folder
```
Create a JAVA project in eclipse
Right click on the project folder and select cofigure build path from the build path drop down
Click on Add External JARs
* from (lucene_directory/analysis/common) add lucene-analysers-common-(version).jar
* from (lucene_directory/core) add lucene-core-(version).jar
* from (lucene_directory/queryparser) add lucene-queryparser-(version).jar
```
Now we are good to start the implementation

### Important Terms
* Positives - Whatever our system retrieves from the data it has are refered to as positives
* Negatives - All the documenst which are not retrieved are called negatives
* True positives(tp) - Documents which satisfy the query and are retrieved by our system
* Fasle positives(fp) - Documents which do not satisfy the query but are retrieved by our system
* True negatives(tn) - Documents which satisfy the query but are not retrieved by our system
* False negatives(fn) - Documents which do not satisfy the query and are not retrieved by our system

Before we jump into the implementation of the search engine we need to know how to evaluate our system. Any search engine is evaluated with the precision and recall metrics.

Precision is defined fraction of retrieved docs that are relevant 
Recall is defined as fraction of relevant docs that are retrieved 
* Precision P = tp/(tp + fp) 
* Recall  R = tp/(tp + fn)

* Stop Words - Whenever we are indexing documents we do not want to store all the words in the memory. Articles, modals, etc do not play a major role in retrieval of the document. Their role is quite trivial. So we drop these words while indexing each document and these words are refereed to as stop words.  

### Dataset
The data that we will be working with for this tutorial is Game of Thrones, the dataset contains a total of 67 documents. The data in each document is scraped from the wiki page of each episode of Game of Thrones


### Implementation
The link to the project is available [here](https://github.com/sumanthd17/Articles/tree/master/searchEngine). Download the repository and run the code.
In the remainder of the section I'll briefly explain the fragments of the code I used.

* Here we use the built-in libraries of lucene for indexing each document. We call the StandardAnalyser() function for removing the stop words and Indexwriter() function writes to the indexed file.
```
public static void main(String[] args)
{
    //Input folder
    String docsPath = "InputFiles";

    //Output folder
    String indexPath = "IndexedFiles";

    //Input Path Variable
    final Path docDir = Paths.get(docsPath);

    try
    {
        //org.apache.lucene.store.Directory instance
        Directory dir = FSDirectory.open( Paths.get(indexPath) );

        //analyzer with the default stop words
        Analyzer analyzer = new StandardAnalyzer();

        //IndexWriter Configuration
        IndexWriterConfig iwc = new IndexWriterConfig(analyzer);
        iwc.setOpenMode(OpenMode.CREATE_OR_APPEND);

        //IndexWriter writes new index files to the directory
        IndexWriter writer = new IndexWriter(dir, iwc);

        //Its recursive method to iterate all files and directories
        indexDocs(writer, docDir);

        writer.close();
    }
    catch (IOException e)
    {
        e.printStackTrace();
    }
}
```
* This fuction is a recursive method to iterate through all the files in the folder.
```
static void indexDocs(final IndexWriter writer, Path path) throws IOException
{
//Directory?
if (Files.isDirectory(path))
{
    //Iterate directory
    Files.walkFileTree(path, new SimpleFileVisitor<Path>()
    {
        @Override
        public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException
        {
            try
            {
                //Index this file
                indexDoc(writer, file, attrs.lastModifiedTime().toMillis());
            }
            catch (IOException ioe)
            {
                ioe.printStackTrace();
            }
            return FileVisitResult.CONTINUE;
        }
    });
}
else
{
    //Index this file
    indexDoc(writer, path, Files.getLastModifiedTime(path).toMillis());
}
```
* This fuction is used to write the information in the indexed document.
```
static void indexDoc(IndexWriter writer, Path file, long lastModified) throws IOException
{
    try (InputStream stream = Files.newInputStream(file))
    {
        //Create lucene Document
        Document doc = new Document();

        doc.add(new StringField("path", file.toString(), Field.Store.YES));
        doc.add(new LongPoint("modified", lastModified));
        doc.add(new TextField("contents", new String(Files.readAllBytes(file)), Store.YES));

        //Updates a document by first deleting the document(s)
        //containing <code>term</code> and then adding the new
        //document.  The delete and then add are atomic as seen
        //by a reader on the same index
        writer.updateDocument(new Term("path", file.toString()), doc);
    }
}
```
* This is the most important fucntion in the project, Here we are using built-in function searchInContent to search the query term in the indexed we created. Lucene provides a wide range of built in fucntions for search the query.
* searchUsingPhraseQuery() fuction searches for the entire phrase in the inverted index
```
public static void main(String[] args) throws Exception
{
    //Create lucene searcher. It search over a single IndexReader.
    IndexSearcher searcher = createSearcher();

    //Search indexed contents using search term
    TopDocs foundDocs = searchInContent("great", searcher);

    //Total found documents
    System.out.println("Total Results :: " + foundDocs.totalHits);

    //Let's print out the path of files which have searched term
    for (ScoreDoc sd : foundDocs.scoreDocs)
    {
        Document d = searcher.doc(sd.doc);
        System.out.println("Path : "+ d.get("path") + ", Score : " + sd.score);
    }
}
```

And we are done, with just around 50 lines of code we created our first search engine. Play around with the code using different built-in function provided by lucene. Lucene is a very powerful information retrieval library and provides us with almost everything we need, but you are always free to write your own indexer, searcher etc.
