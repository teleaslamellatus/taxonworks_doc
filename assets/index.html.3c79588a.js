import{_ as l,r as i,o as r,c as d,a as t,b as e,e as o,w as s,d as c}from"./app.1f33d79d.js";const h={},u=t("h1",{id:"overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),p=t("p",null,[t("em",null,'Addresses the questions: "What does the data-store in TaxonWorks look like, and what is the thought process behind its development? Who are the target audiences for these docs?"')],-1),m=t("p",null,"To understand the data model used in TaxonWorks, in addition to the discussion below, there are series of linked resources here.",-1),g={href:"https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"er",-1),b=t("code",null,"er",-1),_=t("code",null,"Model",-1),w=t("em",null,"Most nodes can be clicked to navigate onwards.",-1),v=t("li",null,[e("A description of the database table for each model. Tables are named as seen in the headers. Many (but not all) related tables are linked in the column name. Follow the "),t("code",null,"table"),e(" links or see the"),t("code",null,"Tables"),e(" section.")],-1),y={href:"https://rdoc.taxonworks.org",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"rdoc",-1),x=t("code",null,"rdoc",-1),T=t("code",null,"api",-1),D={href:"https://api.taxonworks.org",target:"_blank",rel:"noopener noreferrer"},W=t("h2",{id:"audience",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#audience","aria-hidden":"true"},"#"),e(" Audience")],-1),j=t("p",null,"There are various target audiences for this information, some served more than others. TaxonWorks users may belong to more than one of these roles, they are not exclusive of one-another. With some small exceptions no one resource here fully meets the needs of these audiences, but with a little imagination they have a role. Those who might make use include:",-1),S=c("<li><strong>Developers</strong> - The obvious target group. All resources (<code>er</code>, <code>table</code>, <code>rdoc</code>, <code>api</code>) are routinely referenced during development</li><li><strong>TaxonWorks&#39; scientists</strong> - TaxonWorks has many facets, browsing the <code>er</code> diagrams can illuminate data types that you might not have known existed, or give you a better understanding of how some of interfaces relate to one-another</li><li><strong>Scientists migrating or evolving personal databases</strong> - Perhaps looking for how they might migrate their data into TaxonWorks, <code>table</code> documentation is a potential start for those who seek to migrate their data by scripts</li><li><strong>Ontology curators</strong> - While not a true ontology, many of the models illustrated in the <code>er</code> must be represented in ontologies and all need to be abstracted if ontologies are to represent core needs of biodiversity informatics</li><li><strong>Standards builders</strong> - Software and tools guide standards development, and vice-versa. Because standards take a long time to develop tools often &quot;predict&quot; what might need to be standardized. Tools may directly implement standards or serialize to them. All of the entities, and their attributes here, potentially contribute to the broader standards discussion.</li><li><strong>High-level data modellers</strong> - E.g. those considering archival or indexing resources, <code>er</code> diagrams self-describe their domain, and can be used to get a quick over-view of the kinds of data that data-aggregators might need to integrate at a broader scale</li><li><strong>Students</strong> - Students are perhaps first exposed to taxonomy via specimens in natural history collections, reading papers in print, and in their course work or textbooks. There is whole layer of data-science (biodiversity informatics) behind taxonomy, the illustrations and documentation here can act as a resource for learning about how we describe and classify the Earth&#39;s species.</li>",7),A=t("strong",null,"Scientists",-1),I={href:"https://api.taxonworks.org",target:"_blank",rel:"noopener noreferrer"},O=t("strong",null,"Semantic web enthusiasts",-1),C=t("code",null,"er",-1),z={href:"https://www.wikidata.org",target:"_blank",rel:"noopener noreferrer"},F=t("figure",null,[t("object",{data:"/images/model/data/specimen_object_graph_eg1.svg",type:"image/svg+xml"}),t("figcaption",null,' An "object graph", exported from TaxonWorks for a collection object, illustrating a serialization of TaxonWorks that begins to approximate that required in RDF representations. Notice Identifiers (orange triangles), People, Names (pink squares) and Taxon Concepts (green hexagons) are all their own classes of data, among numerous other types. The figure layout was post-processed in Illustrator. ')],-1),E=t("h2",{id:"concepts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#concepts","aria-hidden":"true"},"#"),e(" Concepts")],-1),P=t("p",null,[e("At its core TaxonWorks' data model is a handful of straightforward, yet broad "),t("code",null,"core"),e(" concepts (orange rounded ovals below):")],-1),q=t("code",null,"annotations",-1),N=t("code",null,"supporting",-1),U=t("code",null,"core",-1),B=t("figure",null,[t("object",{data:"/images/model/er.svg",type:"image/svg+xml"}),t("figcaption",null," Key data classes in TaxonWorks. 1) Nodes. Orange, rounded rectangles: 'core' data; light-blue rectangles: 'supporting' data; blue ovals: 'annotators'x. 2) Edges. Solid lines: key relationships; dashed lines: examples, i.e. not all relationships to the class being pointed at are shown. Arrows point to the many side of the relationship, for example one OTU has many Identifiers. Click to navigate to that class. ")],-1),R=t("h2",{id:"meta-model",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#meta-model","aria-hidden":"true"},"#"),e(" Meta-model")],-1),L=t("p",null,'TaxonWorks uses an "ontology-based, graph-aware, relational database" approach to representing and storing data. Practically, this means several things:',-1),G=t("li",null,[e("Each "),t("a",{href:"/develop/Data/tables.htm"},"data table"),e(' corresponds to a class of data. A record in that table asserts that an single instance of that class exists. This is the "Ontology" bit.')],-1),M=t("code",null,"TaxonName",-1),V=t("code",null,"TaxonName",-1),H=t("code",null,"taxon_names",-1),K=t("code",null,"BiologicalCollectionObject",-1),Q=t("code",null,"Specimen",-1),J=t("code",null,"BiologicalCollectionObject",-1),X=t("code",null,"type",-1),Y=t("code",null,"<object>_type",-1),Z=t("code",null,"<object>_id",-1),$=t("code",null,"note_object_id",-1),ee=t("code",null,"note_object_type",-1),te=t("p",null,"There are well known arguments as to when/how each aspect of this approach breaks down or fails in certain circumstances. Our approach is to try and balance the semantics of the data models with the understanding and needs of the scientists using them. Too much semantics and there is a disconnect between what they actually do and the model, too little and things like identifiers, citations, provenance and attribution are not supported.",-1),oe=t("p",null,"In addition to the individual table-class approach there are several higher-level classes, used to carefully isolate the differences between users, the data they curator, and how those data are displayed and presented:",-1),ae=t("ul",null,[t("li",null,[e("Data - The properties of things in TaxonWorks. When designing our data-store we strive to eliminate, or minimize all fields that describe how we display or see Data (see below). Data are further classified, more for the purposes of utility than meaning, into three categories: "),t("ul",null,[t("li",null,"Core - the basic categories most useful for describing life"),t("li",null,"Supporting - the data that link or extend core classes"),t("li",null,"Annotation - General classes of of data that can be applied to most core and supporting classes")])]),t("li",null,"Project - Describes Users, and Projects, i.e. manages who can curate what data."),t("li",null,"UI/Display/Layout - Tables that define how we display, visualize, or present Data.")],-1),se=t("p",null,[e('There are various constraints (in ontology-speak "universals") on TaxonWorks models/concepts. For example if you create a CollectionObject instance then we assume some very specific things are true '),t("em",null,"in addition to"),e(" the data you provide. Definitions, and assumptions are encapsulated in the model via code, in the ways we serialize data (e.g. DwC exports), and in the textual descriptions (viewable in "),t("code",null,"rdoc"),e('), this partitioning is not optimal, but perhaps reflect the reality of how things get built. These assumptions must be further formalized both for computers (e.g. in RDF serialization, or ontology representation) and for human understanding. That is, people will use tools however they can, not however they should, the best way to prevent this "drift" away from intent is education as to why it is important to "follow the rules".')],-1),ne=t("h2",{id:"code",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#"),e(" Code")],-1),ie=t("code",null,"otus table",-1),le=t("code",null,"OTU model",-1),re={href:"https://rdoc.taxonworks.org/Otu.html",target:"_blank",rel:"noopener noreferrer"},de=t("code",null,"otu.rb file",-1),ce={href:"https://rubyonrails.org/",target:"_blank",rel:"noopener noreferrer"},he=t("h2",{id:"database",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#database","aria-hidden":"true"},"#"),e(" Database")],-1),ue={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://postgis.net/",target:"_blank",rel:"noopener noreferrer"},me={href:"https://github.com/SpeciesFileGroup/taxonworks/blob/development/db/schema.rb",target:"_blank",rel:"noopener noreferrer"};function ge(fe,be){const n=i("ExternalLinkIcon"),a=i("RouterLink");return r(),d("div",null,[u,p,m,t("ol",null,[t("li",null,[e("Graphical entity-relationship ("),t("a",g,[e('"ER"'),o(n)]),e(") figures. We use "),f,e(' in the "modelling a domain sense", not particularly a 1:1 description of the links between model and database (though there are numerous times where this is the case). Algorithmically drawn, their purpose is to provide an overview of how data in TaxonWorks are modelled at a generalized level. To draw these figures certain constraints are used, this means that they are cleaner looking, and not cluttered, but also that they may not completely illustrate all pertinent entities or relationships as defined for that model. Follow the '),b,e(" links or see the "),_,e(" section. "),w]),v,t("li",null,[e("A text description of each model/class. This is provided in the context of the code for that model on a "),t("a",y,[e("separate website"),o(n)]),e(". That website is generated with each code commit, it includes the full documentation for the TaxonWorks code-base, so it is easy to get lost for the uninitiated. Follow the "),k,e(" links from the respective tables and models. Using this site as a basis for exploring "),x,e(" can keep you from getting lost therein.")]),t("li",null,[e("Direct links ("),T,e(") to the resources behind the models as represented by TaxonWorks external facing API. For now see documentation at "),t("a",D,[e("https://api.taxonworks.org"),o(n)]),e(". Some models do not yet have a corresponding resource. Some models properties and attributes are accessible by related API endpoints.")])]),W,j,t("ul",null,[S,t("li",null,[A,e(" - In addition to all the science being done, scientists are constantly being asked to do more, differently. How should I organize my data? How might I integrate the diversity of my research program? I'm told to get out of Excel, how might that look? They want "),o(a,{to:"/develop/Data/models.html#identifier"},{default:s(()=>[e("Identifiers")]),_:1}),e(" for "),o(a,{to:"/develop/Data/models.html#person"},{default:s(()=>[e("People")]),_:1}),e("? A majority of the data types represented here are accessible via an externally-facing "),t("a",I,[e("API"),o(n)]),e(" well suited for all the data/information science running in parallel to the observation capture going on in labs, the field, and throughout the scientific process.")]),t("li",null,[O,e(" - A challenge is to turn the generalized "),C,e(" models into RDF, for example how might we see TaxonWorks data in "),t("a",z,[e("Wikidata"),o(n)]),e("? This challenge shares many concerns with ontology builders. What are the universals? Properties? Classes?")])]),F,E,P,t("ul",null,[t("li",null,[o(a,{to:"/develop/Data/models.html#taxon-name"},{default:s(()=>[e("Taxon names")]),_:1}),e(" - about nomenclature")]),t("li",null,[o(a,{to:"/develop/Data/models.html#collection-object"},{default:s(()=>[e("Collection objects")]),_:1}),e(" - about specimens")]),t("li",null,[o(a,{to:"/develop/Data/models.html#collecting-event"},{default:s(()=>[e("Collecting events")]),_:1}),e(" - who, where, when, and how some thing was collected")]),t("li",null,[o(a,{to:"/develop/Data/models.html#otu"},{default:s(()=>[e("OTUs")]),_:1}),e(" - like species or taxon concepts, but even broader, a place to link all the bits that aren't nomenclature, a useful biological unit permitting meaningful work")]),t("li",null,[o(a,{to:"/develop/Data/models.html#observation"},{default:s(()=>[e("Observations")]),_:1}),e(" - data about CollectionObjects or OTUs, e.g. characters or measurements")]),t("li",null,[o(a,{to:"/develop/Data/models.html#descriptor"},{default:s(()=>[e("Descriptors")]),_:1}),e(" - classes of Observations, like quantitative, qualitative, or statistical")]),t("li",null,[o(a,{to:"/develop/Data/models.html#asserted-distribution"},{default:s(()=>[e("Asserted distributions")]),_:1}),e(" - the low-resolution distribution of OTUs according to the literature")]),t("li",null,[o(a,{to:"/develop/Data/models.html#biological-association"},{default:s(()=>[e("Biological associations")]),_:1}),e(" - biological relationships, like host-parasite")]),t("li",null,[o(a,{to:"/develop/Data/models.html#sequence"},{default:s(()=>[e("Sequence")]),_:1}),e(" - curated chunks of the genome")]),t("li",null,[o(a,{to:"/develop/Data/models.html#source"},{default:s(()=>[e("Source")]),_:1}),e(" - a reference")])]),t("p",null,[e("The other types of data are loosely classified as "),q,e(" (blue ovals) and "),N,e(" (light-blue rectangles). Annotations can be thought of as ways to customize the data-model. Supporting data are the bits of information that link to and across "),U,e(" classes, for example a "),o(a,{to:"/develop/Data/models.html#citation"},{default:s(()=>[e("Citation")]),_:1}),e(" links a "),o(a,{to:"/develop/Data/models.html#source"},{default:s(()=>[e("Source")]),_:1}),e(' to nearly anything. This organization, core, supporting, annotation, is echoed in the UI by clicking the "Data" tab in the hub.')]),B,R,L,t("ul",null,[G,t("li",null,[e("In various cases data are organized into graph patterns (network-based, i.e. nodes, edges, and their attributes) amenable to down-stream migration into graph databases (e.g."),o(a,{to:"/develop/Data/models.html#taxon-name"},{default:s(()=>[M]),_:1}),e(" and "),o(a,{to:"/develop/Data/models.html#biological-association"},{default:s(()=>[e("Biological associations")]),_:1}),e(") or serialization into formats like RDF.")]),t("li",null,[e("Tables are named exactly as the class is named, in a pluralized format, for example the class "),o(a,{to:"/develop/Data/models.html#taxon-name"},{default:s(()=>[V]),_:1}),e(" is stored in table "),o(a,{to:"/develop/Data/develop/Data/tables.html#taxon-names"},{default:s(()=>[H]),_:1}),e(").")]),t("li",null,[e("Some classes of data have subclasses (e.g. "),K,e(" is a subclass of "),o(a,{to:"/develop/Data/models.html#collection-object"},{default:s(()=>[e("CollectionObject")]),_:1}),e(" and "),Q,e(" is a subclass of "),J,e(". Each subclass adds assertions as to what the thing being represented is. Subclass assertions are stored in the field "),X,e(" (e.g. "),o(a,{to:"/develop/Data/develop/Data/tables.html#collection-objects"},{default:s(()=>[e("CollectionObject")]),_:1}),e(".")]),t("li",null,[e('Some classes of data are "polymorphic", particularly annotators (see below). This means that one table references many other tables by a combination of '),Y,e(" and "),Z,e(". For example see the fields "),$,e(" and "),ee,e(" in "),o(a,{to:"/develop/Data/develop/Data/tables.html#notes"},{default:s(()=>[e("Notes")]),_:1}),e(".")])]),te,oe,ae,t("p",null,[e("When customizing or adapting TaxonWorks to your needs, maintaining this separate of concerns will facilitate the long term integrity of your data. For example, you can create custom attributes for Data classes via "),o(a,{to:"/develop/Data/models.html#data-attribute"},{default:s(()=>[e("DataAttributes")]),_:1}),e(', these attributes should describe the things they are tied to, not just what "I want to see on some page".')]),se,ne,t("p",null,[e("As noted the database model is mirrored almost exactly in code, for example the "),o(a,{to:"/develop/Data/develop/Data/tables.html#otus"},{default:s(()=>[ie]),_:1}),e(" is represented by an "),o(a,{to:"/develop/Data/models.html#otu"},{default:s(()=>[le]),_:1}),e(" in a "),t("a",re,[de,o(n)]),e(". This is broadly a convention from "),t("a",ce,[e("Rails"),o(n)]),e(", the back-end software used by TaxonWorks.")]),he,t("p",null,[e("TaxonWorks uses "),t("a",ue,[e("PostgreSQL"),o(n)]),e(" with "),t("a",pe,[e("PostGIS"),o(n)]),e(" extensions. For an auto-generated schema in text format see "),t("a",me,[e("db/schema.rb"),o(n)]),e(".")])])}const we=l(h,[["render",ge],["__file","index.html.vue"]]);export{we as default};
