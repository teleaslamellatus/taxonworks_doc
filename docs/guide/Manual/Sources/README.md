---
sidebarParentPosition: 40 
---

# About Sources in TW

_Discover the Source (e.g. publications) management features of TaxonWorks here. For example, sources are shared across projects, a cool time-saving community feature of TW._

Credit: much of the following information derived from a manual tailored for and written by the Universal Chalcidoidea Database (UCD@TW) Project community.

## The Source Hub
In TaxonWorks, sources include the literature database, citations, and other content that is fed directly into the database. The easiest way to access sources is through the `Source hub` task. This is a unifying task that combines several commonly used tasks associated with sources. As a curator, researcher, data manager, student, or technician you may primarily be working from sources that are published papers. Source data can be entered one record at-a-time field-by-field or using BibTeX or CrossRef DOIs. From most reference manager software, one can export source information in the BibTex format and edited as needed in any regular text editor. This can be used for uploading `source` data into TW. With this [wiki](https://en.wikipedia.org/wiki/BibTeX), you can learn more about BibTex.

<!--Source Hub [Screenshot](https://sfg.taxonworks.org/s/rdc03q) Legend
<img align="right" width="200" title="Source Hub" src="https://sfg.taxonworks.org/s/rdc03q"/>-->

#left[**Legend:** `Source hub` user interface sections](https://sfg.taxonworks.org/s/rdc03q [Screenshot of user interface for the Source hub task])

### `Source hub` task features
`Source hub` sections offer select, filter, recent sources, add new source, and batch upload. The `Select a source` option offers a smart selector so you only need to enter as many letters needed to uniquely identify a source. For example, the string 'wool dal sig' brings up Woolley and Dal Molin (2017). If a source is found it will show beneath the search box. 

- Type information in `Select a source` to see if a source is in the database.
  - If you click on a result in the popup beneath the search box, it will take you to a page describing the source. 
  #left[**Legend**: `Source hub` search result](https://sfg.taxonworks.org/s/7vgq1z [User interface showing result of a source search])
  <!--<img align="right" width="400" title="Search Sources" src="https://sfg.taxonworks.org/s/7vgq1z"/>-->
- With `Filter sources` you can apply different search criteria to locate sources of interest. 
  - Use this feature to identify sources you want to work on.
- `My recent sources` shows a list of sources that you have entered recently.
- `New Source` takes you to a screen that enables you to add new sources using various methods.
- Note the `Batch upload` option here via BibTeX formatted source data.

## Related Source Tasks
Next we delve into the details of various work you may need or want to do with source information (e.g. adding sources, editing, tagging, and filtering). The source content needing to be captured includes such data as new taxon names, people strings or names, distribution information, type information, and biological associations. For efficient source data extraction and entry, we recommend familiarity with the following TW Tasks and Data Cards.

FUTURE LINK TO INFORMATION about each of these items

| Tasks                    | Data Cards                        |
|:--------------------------|:-----------------------------------|
| Browse nomenclature       | Taxon names                        |
| Browse OTUs               | Biological Associations            |
| Source hub                | Sources                            |
| Filter sources            | Manage Controlled Vocabulary Terms |
| New taxon name            |                                    |
| New type specimen         |                                    |
| New combination           |                                    |
| Uniquify People           |                                    |

## Source Show

Once you find the publication of your choice using the `Source Hub`, clicking on it opens the `Show` page. Here you will find various ways to navigate to related information and a path to `Edit` this source record. Next we describe some of the features and functions found in the `Source show.`

<img align="right" width="200" title="Edit, Pin, Annotate a source" src="https://sfg.taxonworks.org/s/m0pegj"/>

Note the green `Pinboard icon` <img src="https://sfg.taxonworks.org/s/5ou5yb" width=30px> at the upper right. Clicking this adds the source to your Pinboard for quick access.

The `Radial Annotator` <img src="https://sfg.taxonworks.org/s/sio9gk" width=30px> is a very common function used throughout TW.  It provides convenient access in one place to a variety of relevant functions. For example, clicking on the `Radial Annotator` for a given`Source` might look like this:

<!--<img align="right" width="200" title="The Radial Annotator" src="https://sfg.taxonworks.org/s/9fbwug"/>-->

#left[**Legend**: The `Radial Annotator` functions ](https://sfg.taxonworks.org/s/9fbwug[])

- `Documentation` is where you can drop a pdf of the source, or supplementary files.
- `Tags` allow you to mark sources for later with tags such as `Source Unprocessed`, or `Source Processed for Nomenclature`. Instructions on creating and editing Tags are included below.
- `Notes` is a free text field for any information you might want to add.
- `Identifiers` provides a place to store one-to-many identifiers for a given object. For example, a paper might have a globally unique digital object identifier, aka DOI, but also an author-assigned identifier.
- `Data attributes` in TW gives you a place to store your unique data that may not fit in any typical TW field currently in the data model.

### Try Editing a Source

<img align="right" width="200" title="Edit a source" hspace="10" src="https://sfg.taxonworks.org/s/vrbjbz"/>  

- From the `Source Hub` search to a publication you choose
- Click `Edit` to open the task to make corrections or put text in title in italics, for example. 

Note that italics are indicated in BibTex format as follows `<i> text </i>`.  Everything in between the special symbols will display or print in italics. There are tools in TW to do this for you by selecting text and hitting a button. 
- Be sure to click the `Save` button to keep any changes.

HINT: In `Edit`, you see **New source** but you started by clicking the `Edit` option from an existing source. Rest assured this **New source** window does not mean duplication of the source.

## Adding a Source

About adding Sources, options offered here include the option to re-order fields and ways to auto-fill the `Source` information using a `CrossRef DOI` or using BibTeX you may generate from Zotero or EndNote. This section features commonly used fields. See the scenarios section to find related activities that fit your workflows.

- First, using the `Source hub` always check to be sure the source is not already in TW. If it isn’t found in the search box in the Source Hub, '—None—' will appear below it. With TW "smart" searches you need only provide enough minimal text to find the source (e.g. misspellings may cause you to miss a source).
- Clicking `New Source` in the `Source Hub` brings up this screen.

#left[New Source user interface options. Note you may reorder the fields as you see fit using the `Sortable fields` box in the upper right.](https://sfg.taxonworks.org/s/nhjizu [screenshot of the New Source user interfact])

- The yellow triangle means you have made changes that have not been saved.
- Be sure to `Save` before you leave this screen, or changes will be lost.
- If you have the DOI for a new source, this button provides access to the CrossRef database of DOIs. If it works (it usually does), most of the fields you need will be filled in. Be sure to _check them_, as they are not always correct.
- If you have the reference in BibTex format (most reference databases will output this), you can input it here.
  - From Zotero, simply select the reference, right-click on it, select "export item" and save the file as BibTeX.
  - From EndNote, select the reference and fill out the "label" field. Then go to File > export and select "text file", "BibTeX export". Most people don’t fill out the "label" field in their EndNote database, but if you don’t, you will have to add the label manually by editing the exported text file (that is the field highlighted in the example below). 
  - In the `New Source Form`, Choose the blue `BibTex` box at the top of the screen, and paste in the exported *.txt file. (No drag and drop here).

Most of the fields may be self-explanatory. Here we note a few tricks, for instance:
- Entering an author name in this box (5) `Authors` tries to pull it up from the table of known authors. If it isn’t found, you can use the `Add New` button that appears in this case. This is an advantage in some situations over entering authors as verbatim text (in the Verbatim from BibTex field lower in the screen), because you can easily pull them up later, for example, when adding author names to new species.

- Similarly, below the `Author` section is a search box for `Serials` (journals). If the journal is not found, look for the `New` button to the right of the Serial screen. This opens a screen for you to add a serial to the serials table.

- Once you have created the new source, you should go to `Documentation` in the blue `Radial annotator` to the right of the `Source` and upload the PDF file if available.

- (Optional) Use the TW `Tag` feature to group and track which papers need data parsing or do not. 
  - To do this go to the Tags choice in the `Radial annotator`
  - Tag the source as desired (e.g. `Unprocessed`)
  - And add other suitable tags such as `No Nomenclatural Acts` or `Nomenclatural Acts` as appropriate (this is specific for the UCD project, other projects may use different tags).

- If a source has a title in a language other than English, and you wish to enter the English translation (or translation in any other language), follow these steps:
  - Enter the source with the title as given in the paper and create it.
  - Click on the blue `Radial BibTex annotator` to the right of the source at the top of the page, and click on the pie slice for `Alternate Values`.
  - Choose title from the pick-list, the language for the translated title, and paste the translation in the Value field.
  - Be sure to `Save` it (green button) if this is a new source. Then the original title and translation will both be rendered.

  As all fields are present on the data entry screen for all types of sources, it can be a bit confusing, particularly for books and chapters in books. The article type for a chapter in a book is "Inbook", and the book title would go into the Booktitle field.  For books, there are fields for Editors, Series (if needed), Booktitle, Publisher, and Address (usually city or city and country). The type of a technical report is "techreport".

## PDFs for Sources
 Using the UCD@TW Project as an example, note that most screens that pull up lists of sources in TW have a convenient PDF icon that either opens the source in the PDF viewer (where you can download it), or enables you to download it directly to your browser. For example, if you pull up a source using the `Source hub`, you will get a screen like this -- the so-called `Show` page. The pdf icon will open the source in your browser.

#left[**Legend**: `Source` has PDF](https://sfg.taxonworks.org/s/cbn6vy [])

You can also check to see whether a pdf has been associated with a source using the `Radial Annotator` associated with that source. 
- Click the `Documentation` wedge in the `Radial Annotator` to get the screen below. 
- If a pdf for the source is not present, drag and drop it into the box as shown. 
- If a pdf is associated with the source, you can click the icon indicated by the red arrow to download to your browser.

#left[**Legend**: Does `Source` have a PDF?](https://sfg.taxonworks.org/s/bitrgd)

## Tags on Sources
`Tags` in TW provide a unique way to group documents (or other objects in TW) in any way that you choose. With the `keywords` that you put into a tag, you and colleagues can find the relevant materials needing work or find groups where work is complete and may need vetting. 

### UCD@TW Project Tag Example

Because UCD@TW is a community-curated database, they added keyword tags for sources that allow them to better organize and coordinate group work. These are the tags currently associated with their sources. Tags can be added or removed from a source in the `Radial Annotator`. Most of these tags should be self-explanatory. 

<img align="right" width="300" title="Source Processing Tags for UCD" hspace="10" src="https://sfg.taxonworks.org/s/2cldsu"/> 

- HINT: `Keywords` are the words you put in a `Tag`.
- If certain that a source is an `early view document`, that is, not yet published, they add this tag as any nomenclatural acts in the source are not yet valid.
- If the source is new to TW, for now, they use the tag `Source unprocessed`, as this allows other curators and helpers to pull up sources that need to be curated.
- And to anyone starting work to curate a paper, they apply the tag `Source being processed` so that other community members will not try to work on it simultaneously.

HINT: Using the `Browse Annotations` task you can find out who has claimed sources (or assigned various tags).

## Creating or Editing Tags
Using the **Manage Controlled Vocabulary task** (shown below), you can create custom `tags` with the `keywords` of your choice. In this task, you will need to decide the keywords to use, enter them, and define what they mean.

#left[**Legend**: Find `Manage Controlled Vocabulary task`](https://sfg.taxonworks.org/s/p7t05x [])

#left[**Legend**: Create and Edit Tags](https://sfg.taxonworks.org/s/h1tuyz [])

- To create a new tag use the `Name`, `Definition`, and `Label color` fields on the left of the screen. 
- Note that the definition field _must have at least_ **20 characters** before the `Create` button is clickable. 
- Note that if you want to use the same color for multiple tags, you can use the eyedropper tool in the `Label color` window. 
- To `Edit` an existing tag, use the green icon <img src="https://sfg.taxonworks.org/s/tkwvhi" width=30px/> associated with the `Tag`.

## Sources With Versions or Translated Titles
Some sources exist in more than one version, either with translated titles or in entirely translated versions. To add a translated title, use the radial annotator, under "alternate values", and add the information under "title" to add the English version, such as in the case below:

Example Paper With Title in German and English
<img width="600" title="Source Title Versions" hspace="10" src="https://sfg.taxonworks.org/s/8vsf1w"/> 

Note, there are at least two reasons why you might have more than one version of source:
1. Someone has done a translation of a paper, but it has not been published separately. In this case, simpy add the translated pdf as a second document to the source (Documentation tool in Radial Annotator).
2. The translation has been published separately from the original source. A common example is Entomological Review, which is a parallel version of Entomologicheskoe Obozrenie published in English. In this case, the page numbers are likely to be different in the two journals. You should enter this as a separate source from the original paper in Russian. A search on the author and date will bring up both sources.

## Filtering Sources
TW employs a powerful utility to search for particular sources, the `Filter Source task`. Among the search fields, which can be used in any combination, are the following:
- `Keywords`: search text or title. These are verbatim text search fields that will scan the title or other text fields for keywords, such as taxon names. However, if the name is not in the title, it may not get picked up.
- `Authors`: self explanatory. Search for authors verbatim or for authors in the Authors data table.
- `Date`: you can provide starting and ending years for the search.
- `Tags`: If a source has been tagged, you can search for the tag(s) here. 
  - You can batch tag sources using the method described below.
  - (UCD@TW specific note: However, this will apply mostly to literature that has been added since the transfer of sources from UCD@NHM to UCD@TW).
- `Topics`: This is one of the potentially most powerful uses of this utility. All of the tags to citations from UCD@NHM (the original UCD in London) should have been carried over to UCD@TW on import. Thus, UCD@TW folks can search for papers containing host information, keys to species, redescriptions, or any of the topics in the Topics list. Note that if you have Topics in your pinboard, they will appear here if you select Pinboard. Or you can Search for a topic or pull up the entire list of topics using All.

Once you have created a list of sources, you can do the following:

- `Select All` (button is at top left) or `Select Individual Sources`.
- `Tag`: once you have selected sources you can tag them using whatever tag or tags are in your pinboard by hitting the green `Tag` button. If there is more than one tag indicated as the default in your pinboard, both will be added. Note that if you create a new tag (explained above) this automatically becomes the default tag in your pinboard. 
  - HINT: This is a powerful way to create groups of sources for particular projects.
- **Download CSV**: this creates and downloads to your browser a comma-delimited data file.
- **Download formatted**: here you have the option to choose a format style (e.g. Zootaxa) and create a formatted bibliography.
- If a **pdf** is associated with the source, you can capture it using the pdf icon.

## Importing
### One at a time
- 
### Batch Upload
Using the `Batch Upload` section of the `Sources` Data tab from the project home screen, you can upload a list of BibTex-formatted references all at once. 
![batch_load](https://user-images.githubusercontent.com/11411328/190240979-b9801d87-b97b-47fd-a5aa-bbc251ff6253.jpg)

From this screen, you can upload a Bibtex formatted TXT file that will allow for import of your references. Use this to load bibliographies exported from tools like EndNote, or Zotero. An example file is available [here](https://github.com/SpeciesFileGroup/taxonworks_doc/files/9569266/Monotomidae2.txt). Your Bibtex file must meet the following conditions:
- The file to import should be in UTF-8 encoding.
- The file should have unix style line-endings.
- All entries should include a populated 'Label' field containing a unique internal identifier for the record. Endnote does not provide this by default, Zotero does.
![label_field](https://user-images.githubusercontent.com/11411328/190244623-abc03a72-e110-4907-aec6-7f342cd08170.jpg)

Year fields should not include periods ('.').
Try using a BibTeX bibliography "linter" or validating tool ([for example](https://biblatex-linter.herokuapp.com/)) on the web to find errors in your file. 

Once you upload, you will see a preview list of your sources, highlighted in green, brown, and red. Green references will be imported, brown ones will be imported but have some soft validation that should be cehcked or fixed before upload, and red ones will not be imported.
![references_red_green](https://user-images.githubusercontent.com/11411328/190242804-7cfcde53-d369-4c1a-8fc6-b66dded57152.jpg)

Once you've ironed out any problems, you need to re-upload your data using the `Choose File` button. 
![image](https://user-images.githubusercontent.com/11411328/190245725-76f05ea7-5cb7-453f-b648-28c649fa0272.png)

Click the `Create` Button to upload your sources. 
Once the upload finishes, you should get a screen like this:
![image](https://user-images.githubusercontent.com/11411328/190246930-6c9b23a3-ece1-48d8-97de-f357f48fa5aa.png). 
You can click the edit buttons or search for them in the `Filter Sources` task. 


## Exporting
- CSV
- in a custom format

## Source Scenarios (aka How-To)
When getting data from publication sources into TW, many "how-to" questions may arise. Please see next the following common situations and how to proceed for each. Each of these examples offer you an opportunity to _try it_ yourself in your sandbox account.

### Find uncurated papers
_Say you want to find new sources (papers) that have not yet been curated._ The easiest way to do this is to use the `Filter Sources` task. For example, if you enter the family name in both `Search Text and Title`, and `Source unprocessed` in Tags, you will generate a list of currently uncurated papers for that family:  

[INSERT SCREENSHOT] 

The `tag` box allows you to create collections of sources, for example, to download as *.CSV files for your own spreadsheet or database.

The `PDF icon` opens the `source` in the `source viewer`, from which it can be downloaded. If no PDF is associated with the source, the PDF icon will not show.  You will need to find a pdf for the source outside of TW, and add it using the `Radial Annotator`, as shown above.

Note that there is a red button to `remove from project`. This is because references are SHARED across projects in TaxonWorks, that is, if someone outside UCD already created this source record, you should be able to simply add it. Note that reference data for sources are shared, but not PDFs.

The blue buttons to the right are the `BibTex Annotator` for sources, described above, and the `Navigate Radial` (looks like a compass arrow), which brings up various functions, including an _edit slice_ which takes you to the source editor.

### Document information from a newly published source
When a new source (paper/book/etc.) is published and you want to document the information it contains, note the following steps. 

(Historically, this workflow is described in-depth as an exercise in the former documentation repository in "basic_article_parsing.md" which you can find in [Other Documents](https://docs.taxonworks.org/guide/other-documents.html) from the left sidebar).

  1. Go to the `Source Hub` task card, search the sources in TW to see if it exists.
  2. If it doesn’t then create it, preferably using `CrossRef` function (blue icon at top of `New Source` Screen) as described above. We recommend using `CrossRef` because it imports more metadata (`BibTeX` e.g. from Google Scholar keeps fields to a bare minimum).
  3. If it is in the database but has not been processed, this will be indicated in the `Radial Annotator` under `tags`.  Always be careful since automatically imported articles, even if they are recent, may have wrong data. For example, the year informed by the web site may not match the year of publication (usually explicitly stated in the PDF file).
  4. Also, see immediately above for instructions on using the `Filter Sources` task.

### Add new taxon name
For this task, be sure you have put the `source` in the `Pinboard` and selected it as the `default`, as this will save a lot of time during the process. To manually create a new taxon name (e.g. species / genus / family):
- Select the `New Taxon Name` card from the `Hub`. This will lead to the first screen, where you provide the new name and its parent. 

UCD Specific Note: UCD@TW has been previously populated with the data from John Noyes’ UCD, so inside the UCD@TW database you will not have to create a `root` for the taxonomic name tree (that is, there should always be a parent taxon). First, fill out the name of the highest-level taxon that you are creating, and indicate its parent taxon. For example, if you are creating a new genus with 2 new species, first create the genus, and then create the two new species. If one of the two new species is type-species for the genus, you can come back to the genus name and add the type-species later.

[INSERT SCREENSHOT] 

Note that TW is smart, and as soon as you enter the name, it checks to see if it already has it.

- Next, select the `parent`. This should provide a list of possible parents, pick the correct one. 
  - Based on the rank of the parent, TW will then ask you to select the `precise taxonomic rank of the new name` (see below). If everything is correct, hit `Create`. This will open up the next screen.

- Now you provide the `Source` (publication) and `authors`. If you have pinned the source, the `pinboard` icon will be blue and you can click it to automatically fill in the source details. 
- Then choose `Person`, and enter enough letters to bring up each author (they should be in the database if they were entered with the source).
  - If the authors of the Source are the same as the authors of the new name, you can click the button to the right `Clone from source`. 
  - If multiple persons pop up that appear to be the same (for example `A. Dal Molin` and `Ana Dal Molin`), you can use the `Uniquify People task` to resolve and merge them (see Scenario: Resolving redundant person name strings, and matching author names with and without diacritical marks). 
  - If an author name is not found, you can enter it and add it by clicking the green `Add New` button. This will add the author to the names table. 

- In most cases, for new taxa, you can skip over the `Status` and `Relationship` fields.  However, if the taxon is a fossil, you should check `Fossil` in the `Status` field.  he name will now appear with a little cross symbol to the left. There are special rules in ICZN and TW for fossil taxa.

The `Type` form is next, which opens up a new form to capture details on the type.  We prefer to complete the rest of the `New Taxon Name` form first, and then do the `Type`.

- For new species, the `Original Combination` will be the same as used in the paper, so `Set as Current`. 
- Finally you can _specify the gender and form of the new name_. For species-level names there are four possibilities:

  1. `Adjective`. Most species epithets are probably treated as adjectives, for example, Signiphora flavella meaning a yellow species. These will change their ending if moved to a genus with a different gender. Names with the suffix “-ensis” (usually referring to a place), change the ending only if put in combination with a genus name that is neuter, in which case it becomes “-ense”.
  2. `Noun in Apposition`. These don’t change gender when transferred to other genera with a different gender. An example might be a name like _Aphelinus mali_, named after the common host, the woolly apple aphid. An arbitrary combination of letters is treated as a noun.
  3. `Noun in genitive case`. These are commonly patronyms, ending in “-i” for males and “-ae” for females.
  4. `Participle`. A participle is an adjectival form of a verb. These are treated as adjectives, and they must agree in gender with the genus name. 

- There is a text field to capture the `Etymology`, in most cases you can simply paste this text from the publication.
- Be sure to `Save` all the information (green `Save` button at upper right) before moving to the `Type` screen. (UCD prefers to enter `Type` information last, after everything else on this page has been saved).

In most cases, the `Quick type` screen will provide all the details you need to enter information on the type, and this is what we show below. However, if you have other information to add for the type, such as Lat/Long data, you will need to use the `Comprehensive` form.

- First, pick the nature of the `type` (for most new species this will be a holotype), provide the `source` (click blue `pin` button if source is the `default`), and the `page number`(s) on which the type is designated.
The rest of the information on the type is filled in with the screen below.

  1. In most cases, the type will be a new specimen, not already in TW as an `Existing Collection Object`.  If so, click `New`.
  2. Paste the label data for the type into `Buffered Collecting` event.  This is a verbatim text field.
  3. In most cases, you can ignore `Buffered determinations`, and `Buffered other labels`.
  4. Total is number of specimens (one for a holotype).
  5. Designate the `preparation type` (pin, slide-mount, there are several choices).
  6. The `Repository` is the institution where the type is deposited.  Hopefully the repository will be in the TW table, otherwise you may need to create it using the `Repositories card` in the Data portfolio.  
  7. `Collection Event` refers to a specimen already in the TW database, which in most cases will not be the case if you are curating a new species description.
  8. In `Biocurations`, indicate whether the type is an adult or immature, and a male or female.
  9. Finally, you enter the Identifier for the type, which consists of two parts.  You must first Search for the `Namespace` (see the Glossary above) of the collection in which the type is deposited. Note that this may be different from the repository (a single institution may have several collections, each with a different “namespace”). Think of the `namespace` as the part of a specimen ID number that does not change for each specimen, for example, `TAMU` in `TAMU x01234567`. If the namespace is not in the database, you may need to create it, but since these are shared across projects, there is a good chance it will be there. Once you have selected the namespace, paste in the type or specimen number (only) in the `Identifier` field, and hit the green `Create` button.
 
[INSERT SCREENSHOT]

If you wish to add `paratypes` (optional), you essentially follow the same process for each one.

For many contemporary taxa, there may also be a `ZooBank number` associated with the species. The correct way to enter this is to:
- Scroll to the top of the `Edit Type Specimen` page (or `Edit taxon name` page) and click the `Radial Annotator` to the right of the blue species name.
  - In this case, the `Identifier` will be `Global`. 
  - Pick `Lsid`, and enter the `ZooBank accession number` in the `Identifier` box. Note that some publications will provide the link to ZooBank which is not accepted by TW, but not the actual Lsid. In this case, navigate to ZooBank to get the valid Lsid, which will have the following format:

urn:lsid:zoobank.org:act:5EB72879-1E9C-4A89-BCD8-FF37534B7172

If the paper does not list an Lsid for the new species, it might be worth a try to find it on the Zoobank.org web site.
- Be sure to click the green `Create` button at the bottom of the screen before leaving!

You show now add any additional information about the new species (or genus) in the publication following the process described next.

If you are creating a new `genus-level` or `family-level` name, the process is similar, but in many ways more simple because the type will be a species name or a genus name, respectively.  If the type-species or type-genus name is also new, probably the easiest path would be to create the family-level or genus-level name first, then create the name of the type-species or type-genus, and then return to the new genus-level or family-level name and indicate the type.  If you enter an existing name in the `New Taxon Name` task and select it (assuming it is found), TW will take you to the `Edit Taxon Name` screen where you can enter the type information.

After you click `Create` and `Save` you should be returned to the `Browse Nomenclature` page:

[INSERT SCREENSHOT HERE] 

If you have entered all the information correctly, it should be shown here. Note that the `Validation` form can serve as a checklist. In this case, we have neglected to enter several items, indicated here. To fix these, the easiest way is hit the `Navigate Radial` button (3 at upper right) and from here choose `Edit`.
We think the easiest way to proceed from here is to hit the `Browse OTUs` button (1 at top of screen). This takes you to the summary form for the OTU that you have just created. Note that there is a similar icon on the Browse OTUs page, which will take you back to `Browse Nomenclature` page. This is an easy way to move back and forth between these two important screens.

### Add more species information
To add additional information about the species from the publication, first navigate to the OTU corresponding to the new taxon name. From the `Browse nomenclature` page for the taxon, you can hit the `Browse OTU` icon at the top of the page. This takes you to the OTU that is associated with the taxon: 

Alternatively, you can use the `Browse OTU` task to find the OTU.  TW may bring up more than one choice:

[INSERT SCREENSHOT HERE] 

In this case the OTU name with the check mark refers to the protonym (name as originally published. The OTU name followed by (c) refers to a subsequent combination. It is best to choose the subsequent combination as this will ensure that the data is tracked correctly.

(UCD-specific note: in this case, there is a third choice, which looks like a ghost, that is, a name that was created as a string when host or distribution records were imported from the original UCD@NHM. You should ignore ghosts. UCD@TW are working on eliminating them).

The most common tasks at this point will be to capture `Citations`, `Asserted Distributions`, and `Biological Associations`.
- `Citations`. These provide a way to capture any information that is in the publication (e.g. whether it includes a diagnosis, whether the taxon is figured, information on hosts or distribution, etc.), and `page numbers` on which the information is found. Citing the exact page numbers will help subsequent users quickly find this information in long publications treating many species.
- To enter this information, hit the `Radial Annotator` at top of screen
- Choose `Citations`, enter the source (it should still be pinned)
- Enter the exact `page number`s on which the information is found in the publication
- Click `Create`
- Click the blue `All` button for a list of currently used topics. Select the ones that are relevant
- Scroll to the bottom of the screen, and click the green `Create` button. 
- When you close this screen (x at upper right) you should return to the OTU (`Browse Taxa`) page. If you refresh this in your browser, you should see the `citation` you have created in the upper right.  

HINT: `Topics` are unique to each project. For the UCD project, having created a lot of topics now, they suggest creating a new topic only if absolutely necessary.  
  
  For those working on other projects, you can use the `Manage Controlled Vocabulary Terms` card in the Tasks portfolio to create and define new topics.  Here, the `Keyword` tab at the top refers to `Tags`, discussed above, and the `Topic` tab refers to `Topics`.

#### Asserted Distributions 
- Click the blue `Quick Forms` icon <img src="https://sfg.taxonworks.org/s/w7ow2j" width=20px> at top right, and follow the instructions to pick geographic areas from which the taxon is reported. This is the place to capture information from a `Distribution` section of the publication.
- Enter the `source` which should still be pinned, and the exact `page numbers` on which the distribution information is given. 
  - `Is Original` means this is the first time that this distribution has been published. 
  - `Is absent` presumably means that the publication states that the taxon is not present in the designated area, but UCD notes they are not sure when to use this.
- Next, enter the most restrictive geographic area present in the TW database, which in most cases will be a state or a province.  

HINT: If the paper contains many new asserted distributions, it is more efficient to record these using the `New Asserted Distribution task`. Here you can lock in the source and each OTU, and enter the geographic areas one by one, without having to repeat the other information. In this example, we have locked the source and OTU (red arrows below), and we can enter geographic areas one by one. The task contains other tools (not shown below) that enable you to clone combinations of the Source/OTU, Source/Geographic area, or OTU/Geographic area.

[INSERT SCREENSHOT HERE]

Next, update the `tags` (if necessary) to track progress. UCD Example, once you have entered the `distribution` data from the source, if you are not at this time going to enter other information such as biological associations, add the `Source processed – Distribution` tag to the source.

- `Biological Associations`. These are also accessed from the blue `Quick forms` icon <img src="https://sfg.taxonworks.org/s/w7ow2j" width=20px/>.  The form is shown below. Examples presented here are UCD-based. You may have to enter more information as host data may or maynot already be in your instance of TW.  

[INSERT SCREENSHOT HERE] 

  - Selecting `All` (1) will bring up a list of all `Biological Association` in the project (2).

(UCD-specific note: In general for chalcidoids, you will want to capture the `Primary (animal) host` or `Plant host`, `Plant Associate` in the case of parasitoids, or Parasitoid host in the case of hyperparasitoids). 

  - Pick the relevant blue tab and then hit the blue `Search` button (4) to find the host or associate name in the TW database. In most (UCD) cases, this will be a plant or animal name, so select OTU (3). 
    - Search for the taxon name in the database (this brings up a select OTU search box). The UCD database is extensive, and usually the host will already be there, either as a `Taxon Name` or as an `OTU`. If TW finds either of these, it will bring them up for you to choose. 
    - If neither are found, TW will ask you if you want to "customize an OTU with that name". Say yes, and cut and paste the OTU name in the OTU box that comes up. Leave the Taxon Name box below the OTU box blank. IF YOU DO THIS, BE SURE YOU ARE SPELLING THE NAME CORRECTLY! For this reason it is best to cut and paste whenever possible. There is probably no reason to enter the author name of the OTU, but it doesn’t hurt anything. 
  - Once you have entered the host or associate OTU, enter the `Citation` (source) (5) and `page number`(s) on which the information is located. 
  - As above the `Is original` box (6) means that _this biological association has not been published previously_. So check this box if this is new information not published before.
  - Use the `Browse OTUs` page for the taxon (accessed with the `Browse OTUs card`) to see all previous biological associations recorded in TW for that entity.

At this time, there is no Biological Associations task comparable to the `Asserted Distributions` task (this has been requested of the development team). 
- IF you are entering several new `Biological Associations` from a paper, you can _lock the citation_ for the source by hitting the little lock icon next to the pinboard icon in the Citation box.
- [INSERT SCREEN SHOT for above]

Since most new species will be compared with other existing species, you will want to capture this information also. This is treated as another Biological Association, since any comparison will involve another OTU. 
- Repeat the process for hosts, but choose `Compared With` (instead of associate) and follow the procedure above.

After completing these tasks, close the form and return to the OTU page for the taxon. If you refresh your browser, all the new information should be displayed.

[INSERT SCREEN SHOT of OTU for a taxon showing biological associations]

Remember to make good use of the `tags` for tracking progress.
- If you have entered data for the biological associations reported in a paper, but are not planning to enter other data such as geographic distributions at this time, add the `Source processed – Biological Information` to the source.
- If you have entered all nomenclatural acts in the paper, all relevant topics associated with the citation, all distribution information and all biological information, remove any tags associated with processing and add the tag `Source processed – Complete` to the source.  Congratulations, you have successfully and completely curated this publication!

### Enter information on an existing taxon

Before you do this, we recommend you add the `Browse Taxa` and `Browse Nomenclature` cards to your favorites for easy quick access.

- Check to ensure the publication source you are working with is on your `Pinboard` and selected as the `default`.
- Navigate to the taxon (OTU) using the `Browse Taxa card` in tasks 
- Once you have found the correct taxon, proceed exactly as instructed above for a new taxon.

HINT: _There is at least one important caveat._ If you are capturing information for a species that is currently used in a different combination from the genus in which it was originally described, you may get two OTUs for the species name when you search for it in `Browse taxa`. 
  - one will be the `OTU` attached to the `original protonym` (indicated by a `check mark` next to the name)
  - one will be the `OTU` attached to the `combination` (indicated by a `c` next to the name). 
  - _Use the OTU attached to the combination_, at least for now. This is an area of the database that is still being worked on, but this should facilitate downstream display of the new information.

### Add / amend type information for a new taxon

For many older species group names, there will be no information on the type in TW. If you wish to add this information, you will want to have the original description handy, and pin it to the `Pinboard`. The easiest way to proceed is to use the `New type specimen task`. You can then follow the steps above for designating a type for a new species. 

HINT: The `New type specimen task` is also used to add or modify information on types already in the system.

### New synonymy or removal from synonymy (stat. rev.)

- Find the `junior synonym` name using the `Browse Nomenclature` task. 
- Click the `Edit` icon <img src="https://sfg.taxonworks.org/s/tkwvhi" width=20px/> to navigate to the `Edit taxon name` page.
- Enter the `senior synonym` in the `Relationship` box. A list of candidate names will come up.
- Select the correct one and Set to `Parent`. 
    - A list of choices for the synonym relationship will include `Subjective synonym`, `Objective synonym`, `subsequent Misspelling`, and `Homonym of`.
- Note that you must also `tag` this nomenclatural act (new synonymy) to a citation and page number.
   - Click the `Radial Annotator` icon to the right in the `Relationship box`, and choose `Citations`. 
   - Enter the `Source` (use the blue pin key!) and `page number`(s). 
   - If this is the first time the synonymy has been proposed, check the `Is Original` box.

#### Transfer species to new parent or not
If the junior synonym is a genus name, you must then decide if you want to transfer some or all of the species to the new parent. 
- Once you have made the synonymy, TW will present a table called `Manage Synonyms`. This shows the current parent, and by default, the new parent. You can change the latter to cover cases in which a genus is being split up and the species are being moved to different genera. 
  - You can select species individually, or select All of them.
  - At the bottom of the screen click the green `Move` button. TW will ask you if you are sure you want to do this! 

HINT a la UCD@TW: It is the consenus of UCD@TW curators that if a genus is synonymized under another genus, and the author(s) of the paper do not explicitly treat generic placement of the species formerly contained in it, that all species are considered to belong to the senior synonym, by default.

#### Remove name from synonomy
1. To do this, find the junior synonym and move to the `Edit taxon name` page as above. 
2. Scroll down to `Status` and click the `Show All` button to the right. This brings up a list of all possibilities. 
3. Choose `Valid` (nested under Available), and then be sure to 
4. enter the `Source citation` and pagination as above, but this time use the `Radial annotator` in the right lower corner of the `Status` box.

### New combination

In an older version of TW, your strategy depended upon whether the combination is really new (that is, the species has previously been placed in that genus), or whether the combination had been used before. Scenarios 1 and 2 below cover those cases, respectively. Both procedures still work, but as of November 2021, there is new functionality on the `Edit Taxon Name` page that allows you to handle either case. This is shown as option 3 below. Option 3 is probably the easiest, most preferred way to handle all new combinations now.

For New Combinations.  

- Open the `New Combination` task, and type in the new combination. TW will bring up a list of candidate genera and candidate species. 
  - If you enter a trinomial (for assigning to a subgenus, TW will show 3 sets of names. Pick the correct `genus name` and `species name`
  - Click the `pinboard` icon to paste in the `citation`, add the `page number`, and hit `Create`.
- Once you have created the new combination, be sure to click the `green button` to move the species to the new genus. 
  - (The only time you would not want to move the species to this genus is if you were entering a historical combination, and the species is not currently classified in that genus).  It’s as simple as that!  

Combinations used before.  

- Navigate to the `Edit Taxon name` page for the species. 
- Change the parent to the current genus (the `revived combination`). 
- Then move to the `Radial annotator` to the right of the species name shown in blue at the top right of the screen. 
  - Choose `citation` and enter the `source` and `page number` for the paper in which the former combination was revived.

Option 3 (either use case above)
- Navigate to the `Edit Taxon Name` page for the species in its existing combination. 
- Change the `parent` to the `genus` in which it has now been placed. 
- Scroll down to the `Subsequent combination` box. Click `Set as current`, or drag down the old combination to the species line and enter the genus for the new combination on the genus line. 
- Enter the `source` and `page number` of the paper in which the transfer was published and click `Create`. 

The `new combination` will be added to the chronological list at the bottom of the box, and it should show in the historical list when you return to the name in `Browse Nomenclature`.

If the gender of species is incorrect following the new combination, you may need to change the Gender and form of the species name, and/or the gender of the genus (on the `Edit taxon name` forms for the species name and genus respectively). This correction can also be made using `Click to edit verbatim` (use sparingly).

### Revised family placement for a genus or genus placement for a species

If someone has published a new family-level placement for a genus, recording this is a two step process.
- Navigate to the `Edit taxon name` form for the genus. 
- First, change the `Parent` at the top of the `Edit taxon name` form to the new `family-level taxon`. 
  - If the family name has not been used at this hierarchical level before, you many need to create the `protonym` for it first.
- Second, you must record the `source` of this change. Scroll to the bottom of the `Edit taxon name` screen and find the `Classification` box. Search for the new family-level taxon and `Set to Parent`.
- In the `Radial annotator` that now appears, choose `Citation` and enter the `source` and `page number` where the revised placement was published. 

If you are moving a subfamily, tribe or subtribe to a new family, the process is the same, but you would work from the `Edit taxon name` screen for the appropriate family-level taxon.

To move a species to a different genus or subgenus, use the New Combination task Scenario <!--(Scenario 4.7 above).-->. If you are moving a subfamily, tribe or subtribe to a different family level taxon, but the categorical level of the taxon you are moving does not change, follow the same procedure.

However, if you are changing the categorical level of a `family-group name`, the process is more complicated, and you will need to refer to [Scenario: Changing rank of a family-level taxon](#changing-rank-of-a-family-level-taxon). <!--4.14 below.-->

### Designate nomen nudum or numen dubium 

- To designate a name as a `_nomen nudum_`, `_nomen dubium_` or as `unavailable`, navigate to the `Status field` in the `Edit Taxon Name` form. 
  - The default for this field is valid. Four common choices are shown: `Unavailable`, `Nomen Nudum`, `Nomen Dubium`, and `Fossil`.
  - Click the `All` button here brings up a comprehensive list of other possibilities. For unavailable names you should probably look at the entire list and designate the reason the name is not available.
  - Be sure to enter the `source` and `page number` for the paper that published this information.  

### Homonyms and replacement names

The most common scenario will be that someone has discovered a junior homonym and provided a replacement name. Here are the steps you would follow. First be sure the `source` is the `default` in your `pinboard`.

- First create the replacement name using the `New Taxon Name task`, as described above, entering all information on the authors, citation, etc.
- Then move to the junior homonym (`Browse Nomenclature`, click the green `Edit` button at top right corner). 
  - In the `Relationships` field, enter the `senior homonym`. 
  - You will be given a list of choices, choose `Homonym of`.
- Now designate the replacement name. In the `Relationships` field, enter the `replacement name`. 
  - HINT: `Replaced By` does not appear in the short list of choices, so either search for it (easiest) or find it in the table of `All choices`.
  - Enter the `citation` and `page number` where the `replacement name` was published.

### Resolving redundant person name strings, and matching author names with and without diacritical marks

Often when you enter a person's name string in a search field, such as for authors of a source or taxon, multiple entries will pop up that appear to be the same person, such as `A. Dal Molin` and `Ana Dal Molin`. The `Uniquify People task` provides tools to resolve and merge these. 
- Find one instance of the person in the `Select Person` field, and 
- Load another instance (probably with different abbreviations of names) in the `Match People` field. The task will show you information about each person, such as representative publications. 
- If you are sure that they are the same people, you can merge them by clicking the `Merge People` button.

Diacritical marks (e.g. umlauts, tildas) on author names pose special problems, as the search engines may not find them. For example, if the author name is Ferrière and you enter Ferriere (without the diacritical mark), the search engine will not find it. The best way to resolve this is to treat Ferriere as an `alternate spelling` of the name Fèrriere. To accomplish this:
- Go to the `People data card`, and pull up the name.
- In the `Radial annotator` at the top of the screen, choose `Alternate Values`
- Then click the `Alternate Spelling` tab.
- Select whether it is the first or last name, enter the alternate spelling, and click `Create`. Once this is done, the search engine will find the person using either spelling of the name.

### Recording subsequent misspelling of a name

- First, you need to `create` the misspelled name using the `New Taxon Name task`.  Do not give it an author. 
- Scroll down to the `Relationship` field
- Search for the correctly spelled name
- Set the correctly spelled name as the `Parent`, and 
- Choose the `Misspelling Of` button.
- Enter the `citation` (source) for the `misspelled name` and the `page number` in the `Radial Annotator` on the right of the `Relationship` field.

### Adding images to TW

Images can be attached to various entities in TW, such as `Collection objects` (specimens) including types, `OTUs` (concepts of taxa), `Collecting events`, etc.  If you put images in TW that are not your own property or are in the public domain, you should be sensitive to copyright issues. TW will accept images in PNG, TIFF, or JPEG formats. The following are probably the most common cases in which you might wish to upload images.  

Type specimen images.  
- Navigate to the `Collection object` form for the type using the `New type specimen task`, or go to the `Type` screen (either `Quick` or `Comprehensive`) in the `Edit taxon name` form. 
- If the type has not already been recorded (which will be the case for many old names), you will need to create it first. **Drag and drop** the image into the `Depiction field` (it contains the text `Drop images here to add figures`), in either the `quick` or `comprehensive type` screen.
  - Of course, if you do this, you need to be sure that the images are actually of the types! Note that you can add images to holotypes, allotypes, and all of the other types possible in the `Type` screen. 
  - Note also that if you click in the box surrounded by a dashed line, TW will open a dialog box representing the folders on your computer where you can browse for the images.  

If the image is something other than the type specimen itself, such as labels of a type specimen label or a copy of notes on the type, then:
- Navigate to the `Expanded Edit` `Radial navigator` to the upper right of the `Depiction` field,
- Choose `Depiction` and check `Is data depiction`. 
- If you are pulling the image from a publication, find `Citation` in the `Radial annotator` below the image and give the `source` and `page number`. 

OTUs.  

Images illustrating taxa should be attached to `OTUs`.
- Use the `Browse taxa` task to find the `OTU`.
- Note the `Radial Annotator` to the right of the name at the top left of the field has a `Depiction slice`, which you can click on and then use to add the image.
- Once the image has loaded, you can use the green `Edit` button to add a `figure name` and a `caption`.
- If you are pulling the image from a published source, be sure to enter the `source` and `page number`, using the `Citations` slice in the `Radial annotator` to the right of the image.
- To delete an image, click the red `trash icon`<img src="https://sfg.taxonworks.org/s/lnxbjc" width=20px/> to the right of it.

Copyright issues.  

To enter the `copyright status` for an image, find the `Attribution` slice in the `Radial annotator` associated with it (it also has a copyright symbol in it). Here you will find a menu with different copyright options, the year of copyright, and various other places to enter the `Creator`, `Owner`, `Editor`, and `Copyright holder` for the image.

Associated with each image are a `Label` field and a `Caption` field.  We recommend using the `Caption` field only to record information associated with the image, such as "Fig. 2, male head, frontal view". The `Label` field is intended for use primarily when using TW to create output such as species pages or publications.

It is also possible to batch process images using the `New Image` task, which may be more efficient if you are uploading many images from the same publication. You can drag and drop batches of images, and then assign the author/creator, source (publication), copyright information and so forth for all of them at once. If you plan to attach the images to an `OTU` or `Collection Object` (including type specimens) upload only the relevant images in each batch. Then you can use the `Depict Some` screen to assign them.

### Changing rank of a family-level taxon
<a name="change family-level taxon rank"></a>
This is a multi-step process. You may need to raise or lower the rank of a family-level taxon. The process is the same. Here's an example: let’s assume that we wish to raise the categorical level of the taxon Coccophaginae to family level, Coccophagidae. Here are the steps to follow.

1. Check to see if Coccophagidae has been used at the family level before (use `Browse Nomenclature`). If it has, you can skip step 2 below, because the taxon name Coccophagidae already exists in the system.

2. If the taxon at the family-level (Coccophagidae here) does not exist, navigate to the taxon name Coccophaginae (`Browse Nomenclature`) and move to the `Edit Taxon Name screen` to create the name Coccophagidae.
- The best way to do this is to `Clone` the subfamily level name (green button in upper right), as this will retain the author and date, type genus, and other historical information.
- `Select all the boxes` to retain all historical information and type `CLONE` in the box. This will active the green `Clone` button. Note that _you are creating a `taxon name` here_, not an OTU, which is a separate issue.

3. You are now on the `Edit taxon name` page for the cloned name. 
- Change the family ending suffix to “idae”, or Coccophagidae.
- Now change the parent. In this case, it will now be Chalcidoidea.
- Then `Show all ranks`, and pick `Family`.  

4. To record who made the change in categorical level:
- Scroll down to the `Classification field`
- Click `Set to Parent` (which will pick up Chalcidoidea from above), if the current classification is correct. Otherwise, type in the correct parent. 
  - Below the field will be two choices, `Incertae Sedis` and `Classified As`. Pick Source `Classified As`.
- Enter the `source` and `page number` for the publication in which the change was made (in this case, elevation of Coccophaginae to Coccophagidae).

5. Now you need to make the appropriate changes to the nominate subfamily taxon, the subfamily Coccophaginae in this example.
- `Navigate` to the `Edit Taxon Name` form for Coccophaginae.
- Change the `parent` here to the new family-level name, in this case, Coccophagidae.  

6. Next, scroll down to the Relationships field.  
- Enter the new `family-level name` (Coccophagidae), and 
- `show all possible choices` (blue box to right). 
  - Choose `Family Group Name, Original Form Of` from the menu of choices (it is below `Usage` which is below `Unavailable or Invalid, linked to`).
- Enter the `source` and `page number`, as always.

7. At this point, a `Manage Synonymy` screen will appear. This provides a dashboard for assigning the classification of all taxa subordinate to the family name (children, in other words).  

8. Below the `Manage Synonymy` screen you will find the `Classification` screen.
- Type in new `Parent` (Coccophagidae in this example), and 
- Choose `Source Classified As`.
- Enter the `citation` and `page number` for the appropriate publication.

### Changing rank of a genus-level taxon or species-level taxon

Example: to elevate a subgenus to genus level:
- First `Navigate` to the name of the subgenus and click on the `Edit taxon name` tool. 
- Change the `parent` as appropriate (family, subfamily, tribe etc.) and 
- Change the `rank` to genus. 

Next, how to record the citation? Note well, classification relationships should be used only *above* the genus level.

For making any changes in rank at the genus level and below use the `New Combination task`: (explained in <!--section 4.7--> the `New Combination Scenario`). There is still a 2-part process required at the moment.
1. Create the combination (using the `New Combination` task), e.g. Camptoptera (Eofoersteria), and add the `citation` for same there.
2. Update the `classification` by changing the `parent` for the "now" subgenus. You will be required to manually `select the rank`, (e.g. subgenus)

One should be aware that UCD@NHM did not use subgeneric names, they were treated as synonyms of the parent genus. However, if species names were originally described in a subgenus, the original combination was recorded and will show in UCD@TW as a combination, as in the following example:

INSERT Screenshot

If you are working with a genus in which a subgeneric classification has been used, you have the following options:

1. You can create all of the subgeneric names, or find them and treat them as valid children of the appropriate genus. Nominate subgeneric names can be created by cloning the genus name and changing rank (see examples for subfamilies above, section 4.14). Whether or not you want to take the time to do this is up to you and your colleagues, but the tools are there in UCD@TW and in TaxonWorks generally.

2. You can continue to treat the subgenera as junior synonyms of the parent genus.  However, if you curate a paper in which a species is originally described in a subgenus, you should be sure to enter both the `Genus` and `Subgenus` names in the `Original Combination` and `Rank` section of `Edit Taxon Name`.

3. If you want to record historic subgeneric placement, use the `New Combination task`.

### Species groups

These are used in many genera of chalcidoids as informal grouping of species without nomenclatural rank or status. UCD@TW provides the tools to treat these formally (as superspecies which is what the ICZN recommends) but it will not display them as such in `Browse Nomenclature`. However, the consensus in the UCD project seems to be that it is preferable to leave species groups as informal groupings without nomenclatural baggage. How then to indicate or record assignment to species groups? There are several options, each of which has strong and weak points. It is a "policy decision". You will have to decide which option works best for your group.

One.  
- Add the `species group designation` to the `OTU name` field using the `edit OTU` function. The OTU can remain linked to the original taxonomic name. It will display as follows, every time the OTU name is displayed:

INSERT screenshot

Two.  

You will need to use a data attribute with the Predicate name `species group` and add the predicate as a default option to the OTU display.  
- First, create a new `Predicate` using the `Manage Controlled Vocabulary task`. 
- Provide a `definition` and choose a `color`.
- Next, go to `Project` (upper right corner of any screen)
- Choose `Edit Preferences` under `Edit` (upper left corner of screen)
- Select `OTU`, scroll down to`Species Group` and select it.  

Now the `Predicate` is created and will be available for any `OTU` and can be designated where needed.

- Second, `Browse` to a particular OTU and choose `Data Attributes` in the `Radial annotator`. 
- Type `species group` in the `Select a Predicate` box, the `name` of the species group in the `Value` box, and click the green `Create` button. 
- If you want to associate this placement with a literature citation, enter it using the `citations` button to the right of the `species group name` at bottom of the screen.

Once you have completed Step One above, the `Predicate` will be available for any `OTU`, you can designate them using Step Two.

Three.  
- Create a `Tag` for each species group in `Manage Controlled Vocabulary`, 
- Apply the tag to the OTU using the `Radial annotator`. This will allow you to pull up all OTUs assigned to a particular species group in the `Radial annotator`.
- Note well, however, the downside is that the tags will appear in the list for everyone in the project.

Four.  
- Create a matrix of OTUs for each species group.


### About tribes and subtribes

Again, using the UCD@NHM Project as an example, they did not formally recognize taxonomic levels between genera and subfamilies. Names of tribes and subtribes were treated as junior synonyms of their respective families. However, tribal and subtribal classifications are currently used in many families of chalcidoids. If you wish to incorporate these into classifications in UCD@TW, steps to follow are describe below. First, you must determine if the tribal or subtribal form of the name is in UCD@TW, treated as a synonym of the subfamily. See the entire scenario next.

One.  
- To determine if the tribal or subtribal form of the name is in UCD@TW and treated as a synonym of the subfamily, go to `Browse Nomenclature`, `search` for the name, for example, `Coccophagini`.  
  - Be sure that you do not have the redirect to valid name box checked!  
  - If you get a result showing the tribe (or subtribe) name in a black box to the right of the subfamily name (see below), the tribal form is in TW treated as a synonym of the subfamily.

In most cases, if the tribe or subtribe name has been used in the literature, it will show up as a synonym of the nominate subfamily.  If it does not, you will need to create it, so skip to section Five below.

- Navigate to the name with the tribal name at right (not to the valid form of the subfamily name, which may come up without the tribe name in the black box). It will be shown as an invalid synonym of the subfamily. 
- Click the green `Edit` icon to move to the `Edit Taxon Name` form.
- `Show all ranks` in the `Basic Information` form and pick `tribe`.
- Then change the suffix from `-inae` to `-ini` and pick the appropriate `parent`.

Two.  
- Scroll down to `Status`, `Show All`, and select `Valid`.
- Provide the `citation` and `page number` using the `Radial annotator` to the right.

Three.  
- If you wish to provide a citation for this usage of the name, scroll down to `Classification`, choose `Set to Parent` (in this case it would be `Coccophagini`)
- Choose `Source Classified As`.

Four.  
- One more (obsure) task remains. Using the `Navigate Radial icon`<img src="https://sfg.taxonworks.org/s/7w1dx2" width=20px/> to the right of the tribal name at the top of the page, choose `Show`
- Then choose `Edit` in the menu bar at the top of the next screen. This takes you to an older version of the `Edit Taxon Name` form. 
- If a name appears in the `Verbatim Name` field at the bottom of the screen (like `Coccophaginae ), `delete` it and click the green `Update Taxon Name` button. This removes an artifact created when tribal or subtribal names were imported as synonyms from TW@NHM.

Continue from this point only if the tribal or subtribal form of the name did not show up as synonym when you searched for it in step One above. Most likely, in this case it has not been used at this hierachical level before. If it does not show up, create it using the following process.  

Five.  
- Navigate to the taxon name at the subfamily level, for example, Coccophaginae (via `Browse Nomenclature`) and move to the `Edit Taxon Name` screen. 
- Create the name at the tribal or subtribal level, for example, Coccophagini. The best way to do this is to `Clone` the subfamily level name (see green button in upper right), as this will retain the author and date, type genus, and other historical information. `Select all the boxes` to retain all historical information and type `CLONE` in the box. This will active the green `Clone` button. Note that you are creating a taxon name here, not an OTU, which is a separate issue.

Six.  
- Navigate to the tribal (or subtribal) name in `Browse Nomenclature` and move to the `Edit Taxon Name` screen.
- `Pick` the rank (tribe) and change the ending to `-ini`. 
- Change the `parent`. In this case, the parent of Coccophagini would be Coccophaginae.

Seven.  
- Under Classification, set to parent (Coccophaginae) and choose `Source Classified As`. 
- Use the `Radial annotator` to the right to enter a citation for the publication and page number of the paper in which the tribe was recognized or moved.

Eight.  
- The problem with this approach is that all of the children of Coccophaginae will have been transferred to Coccophagini. If some of these genera belong to another tribe, you will need to create any such tribe, using the steps above, and transfer the genera, one by one.

### Taxon classified as _Incertae Sedis_

- First navigate to the appropriate taxon name
- Click the green `Edit Taxon Name` button.
- Change the parent to the higher level taxon in which the taxon has been classified as _Incertae Sedis_.
- Navigate down to the `Classification` field
- Click `Set to Parent`, and choose `Incertae Sedis`.
- Then record the source and page number in which the classification was made using the `Radial annotator` to the right.

### Species name endings changing due to movement to another genus, or correction by publication

For some name:

A - start (origin)   
B - current -> current classification  
    change the parent here -> everything looks more or less right  
C - second move  
preserve "b"

A - Protonym  
B - Combination  
C - Parent (Combination)  

From a practical standpoint, when a name changes, use `New Combination` task.  Why?

1. It lets you create the new combination just by typing in the string
2. Having that combination, even if its just a B, pre-adapts you for C's. This gives you the historical record.
3. In the `New Combination` task, after the combination has been created, there is an option to easily move the name to the correct parent

Considerations vs. line endings.  

4. In the `New combination task` you will find/pick the species _in its original latin form_
  -	If that name has gendered data with it
    - and the new genus has gendered data with it
      - Then conjugation of the species name will automatically be rendered correctly in the new combination, and in reference to the new Parent (after you do 3) above)
    -	To pre-adapt your steps above being easy, follow best practices and **add the gendered information at the time of entry of a Protonym.**

Never just change parent, always go the `Combination` route. (i.e. 2) above).

Example use case of name ending corrected by subsequent publication:

- Species published with incorrect ending
  - Name is always the original form, latinized, never changed
- Author "corrects" the ending in a subsequent publication
  - Key information: in this case there is **no second Protonym**, the gender ending correction happens automagically
  - Key trick: to add a citation with this "fixed" data you must create a new `Combination`, and cite it.  You must compose the combination with the same protonym that was "misspelled"
- Key bits of making new combinations
  - Think about making your new combination by finding
    - `Protonyms` in the *original* combination
  - Remember if you type in a gendered ending, and no suggestions are found, you can always click to search directly by the original combination, or to track down the protonym in the taxon name autocomplete.
  - For all of the above to work, the `Gender and form` section of the `Edit Taxon Name` form on the original protonym must be filled in.

### Species synonymized with two or more other species

- A name is published.
- A type series is used (i.e. there is no holotype)
- The type series is found to represent two different species.
- The author says "we're stating this is two different species, and synonymizing the original name under two other names, but not selecting a holotype. If a future worker selects a holotype, our actions here may need to be changed again" (alternatively, author may synonymize the species _in partim_).
  - Recommendation: Do nothing (do not post the two synonymies in TW) but add a citation and note, there are no governed consequences to manage.
  - If you did have specimen catalog numbers then you could create 2 OTUs, each with the same species name, pre-adapting the data to receive new names for the new names if they come out.
  - Recommendation 2: Use a `Nomen Dubium` status and attach a citation to this.

### Junior synonym conserved by ICZN decision (i.e. senior synonym suppressed)

- Start at the `Edit Taxon Name` form for the suppressed name (senior homonym). 
- Under the `Relationship` section type in the suppressed name
- And using the `Show all` button, select `suppressed under`. 
- Cite this.
- Next, go to the `Edit Taxon Name` form for the junior homonym.
- Under the `Status` section, use the `Show all` button to find `official list of specific names in zoology` and select `valid`. 
- NB: use the `Advanced` button if for some reason the `Show all` button is grayed out. 
- Cite this.

### Entering names with incorrect endings for their taxonomic level

One method: 
- Create name using correct ending, `Save`. 
- Designate as `Not Latin` under status. 
- Change the name ending to the form wanted, `Save`.

Second method: 
- Create name. Using navigation radial, go to `Show`. 
- Click on `Edit`
- Scroll down to bottom of form to `Verbatim` field and type in name as it was originally published. 
- Click `Update Taxon Name`

Third method: 
- Create the name. Click on `Edit` to get to `Edit taxon name` form.
- Click on`Clone`. 
- Select `Add invalid relationship`. 
- Type `clone` and then click the `Clone` button.
- `Edit` the `Relationship` field and select `Family Group Name Form`.
