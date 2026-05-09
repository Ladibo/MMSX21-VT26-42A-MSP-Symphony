<img alt="United Nations Enrvironment Programme logo" src="/assets/support/en/media/image2.png" width="103" height="75"> <img alt="Nairobi Convention logo" src="/assets/support/en/media/image3.png" width="82" height="88"> <img alt="Sweden logo and Swedish Agency for Marine and Water Management logo" src="/assets/support/en/media/image4.png" width="363" height="76">

**WIO Symphony user manual**

**THE ENGLISH VERSION**

Manual edition: 19 December 2025

WIO Symphony version: Symphony 1.22.0

<img alt="" src="/assets/support/en/media/image5.png" width="605" height="360">

WIO Symphony stands for the **Western Indian Ocean Symphony**. It is a
co-developed tool for the assessment of combined, or cumulative,
environmental impact of different human activities across vast ocean
spaces. This open-source tool is useful for MSP, marine spatial
planning, and other area-based management.

For **quick start** go to [**chapter 4. Before using the
tool**](#before-using-the-tool).

You can access the tool at [**WIO
Symphony**](https://symphony.nairobiconvention.org/).

# Content

- [1. Purpose, principles, partnership](#purpose-principles-partnership)
  - [1.1 Co-developed widely](#co-developed-widely)
  - [1.3 The Nairobi Convention manages and updates](#the-nairobi-convention-manages-and-updates)
  - [1.4 Financed by Sweden, Sida, GEF, and in-kind](#financed-by-sweden-sida-gef-and-in-kind)
- [2. WIO Symphony method and analyses](#wio-symphony-method-and-analyses)
  - [2.1 Method](#method)
  - [2.2 Basic equation](#basic-equation)
  - [2.3 Further analyses: rarity, one-over-many, and scenario comparisons](#further-analyses-rarity-one-over-many-and-scenario-comparisons)
- [3. Main ingredients: ecosystem components, pressures, sensitivities](#main-ingredients-ecosystem-components-pressures-sensitivities)
  - [3.1 Ecosystem components](#ecosystem-components)
  - [3.2 Pressures](#pressures)
  - [3.3 Sensitivity scores](#sensitivity-scores)
  - [3.4 Uncertainties and limitations](#uncertainties-and-limitations)
  - [3.5 Tool implementation and access](#tool-implementation-and-access)
- [4. Before using the tool](#before-using-the-tool)
  - [4.1 Use WIO Symphony alongside other methods](#use-wio-symphony-alongside-other-methods)
  - [4.2 Use at an appropriate scale -- most suitable for large areas](#use-at-an-appropriate-scale-most-suitable-for-large-areas)
  - [4.3 Carefully consider what to analyse: Types of analysis and elements to include](#carefully-consider-what-to-analyse-types-of-analysis-and-elements-to-include)
  - [4.4 Feedback us your critique](#feedback-us-your-critique)
- [5. User manual](#user-manual)
  - [5.1 Support](#support)
  - [5.2 Change language](#change-language)
  - [5.3 See software version](#see-software-version)
  - [5.4 Important notes before composing Symphonies](#important-notes-before-composing-symphonies)
  - [5.5 Boundary polygons](#boundary-polygons)
  - [5.6 View data layers](#view-data-layers)
  - [5.7 Notes on individual data layers](#notes-on-individual-data-layers)
  - [5.8 Calculate cumulative impact](#calculate-cumulative-impact)
  - [5.9 Cumulative impact Calculation Report](#cumulative-impact-calculation-report)
  - [5.10 Erase and reset](#erase-and-reset)
  - [5.11 Create and analyse scenarios](#create-and-analyse-scenarios)
  - [5.12 Compare two scenarios](#compare-two-scenarios)
  - [5.13 Compound comparison](#compound-comparison)
  - [5.14 Select, Merge or Split several polygons](#select-merge-or-split-several-polygons)
  - [5.15 Analyse several polygon areas](#analyse-several-polygon-areas)
  - [5.16 Batch analysis](#batch-analysis)
- [6. Further analyses](#further-analyses)
  - [6.1 MINISYM -- analysing individual pressures](#minisym-analysing-individual-pressures)
  - [6.2 Rarity-adjusted cumulative impact](#rarity-adjusted-cumulative-impact)
  - [6.3 Screen for Suitable Locations for new activities](#screen-for-suitable-locations-for-new-activities)
  - [6.4 Choose and Edit Matrix](#choose-and-edit-matrix)
- [7. Updating and new data](#updating-and-new-data)
- [8. References](#references)

Cite as:

WIO Symphony. 2025. WIO Symphony user manual, release 1.22.0. Nairobi
Convention and Swedish Agency for Marine and Water Management. Nairobi.

## 1. Purpose, principles, partnership

When marine spatial planners and managers work across large geographies,
it becomes difficult to account for the vast array of marine animals,
plants, and human activities. Thus, it can be challenging without
support from data and computational tools. From a bird's eye
perspective, the WIO Symphony tool serves as a means for understanding
the combination of numerous human activities affecting multiple parts of
nature, all at the same time. This is called cumulative impact
assessment.

Marine planners and managers who have access to the tool will obtain an
overview of existing ecosystem components and pressures, as well as
current environmental impact in their area of interest. This brings
science closer to management and may support ocean governance,
specifically ecosystem-based marine spatial planning (MSP).

**The purpose of WIO Symphony is to facilitate informed and transparent
decision-making that leads to sound and sustainable use of marine
resources, and, in turn, support wealth and socio-economic development
in the Western Indian Ocean region.**

### 1.1 Co-developed widely

The WIO Symphony tool was co-developed on the request by the Nairobi
Convention. The work was initiated in 2019 and the tool is available
since late 2022. The co-development was led by a Swedish team in
partnership with the MSP technical working group (TWG) of the Nairobi
Convention, including two representatives from each of the 10 member
states (Comoros, France, Kenya, Madagascar, Mauritius, Mozambique,
Seychelles, Somalia, Tanzania, and South Africa). The Swedish team was
led by the Swedish Agency for Marine and Water Management (SwAM), in
partnership with the Geological Survey of Sweden (SGU), the Swedish
University of Agricultural Sciences (SLU), and Gothenburg University
(GU). Technical support was provided by a large group of regional and
international experts, with approximately 100 professionals from 14
countries contributing to WIO Symphony's development.

**1.2 Open and transparent**

All components of the WIO Symphony tool are based on the principles of
transparency and open data sharing.

- Data layers and metadata is available for download at [GitHub: WIO
  Symphony](https://github.com/WIOSymphony/wiosym).

- Links to underpinning data and models are freely available at [GitHub:
  WIO Symphony](https://github.com/WIOSymphony/wiosym).

- The tool's software code is available at [GitHub: MSP
  Symphony](https://github.com/havochvatten/MSP-Symphony).

- WIO Symphony is also described on [SwAM's web
  page](https://www.havochvatten.se/en/eu-and-international/international-cooperation/swam-ocean---improving-lives-through-sustainable-use-of-the-ocean/wio-symphony---a-tool-for-ecosystem-based-marine-spatial-planning.html)
  and discussed on [GitHub
  Wiki](https://github.com/WIOSymphony/WIOSym_InfoChannel/wiki).

Summary of metadata is also displayed in the tool, as well as
contributor acknowledgements.

### 1.3 The Nairobi Convention manages and updates

Although all components of the tool are open access, the WIO Symphony is
hosted on the Nairobi Convention's server, who is also the acting owner
of the WIO Symphony application. The Nairobi Convention Secretariat is
responsible for managing the tool, including maintenance and update
procedures.

### 1.4 Financed by Sweden, Sida, GEF, and in-kind

The bulk of finances behind the WIO Symphony development have been
provided by the by the Government Offices of Sweden through the
bilateral program for environment and climate collaboration and Sida,
the Swedish International Development Cooperation Agency through the
SwAM Ocean program, as well as the Nairobi Convention in turn supported
by the Global Environment Facility, especially the SAPPHIRE project.

Numerous institutions have contributed in-kind with expert staff and
some individuals have contributed on voluntary basis.

## 2. WIO Symphony method and analyses

### 2.1 Method

#### Rationale for cumulative impact assessment

The rationale behind cumulative impact assessment is to emphasise the
combined effect of many different sources on many different parts of the
environment. Cumulative impacts -- positive or negative, direct and
indirect, long-term and short-term -- arise from a range of activities
throughout an area or region, where each individual effect may not be
significant if taken in isolation (European Commission, 1999). However,
the cumulative impact calculated in WIO Symphony does not explicitly
consider temporal, time-dependent, aspects. Nor does it explicitly
consider positive impacts. These and other caveats are discussed in this
manual.

#### Symphony is used for ecosystem-based MSP in Sweden

The WIO Symphony tool is directly based on the Swedish Symphony tool
used within Swedish MSP (Hammar *et al.* 2020). Being responsible for
ecosystem-based MSP in Sweden, the Swedish Agency for Marine and Water
Management (SwAM) developed and used Symphony as a tool for integrating
cumulative impact assessment in the planning process. In Swedish MSP,
Symphony was used for:

(i) planning-integrated comparison of environmental impact of different
    planning alternatives,

(ii) identification of areas in need of measures for environmental
     precaution, and

(iii) as a basis for the Strategic Environmental Assessment (SEA) of the
      MSP.

It has also been used in support of marine protected areas (MPA).

#### Methods originates from Halpern et al. 2008

The method originates from the previous work by Halpern *et al.* (2008).
Halpern presented a transparent and useful way of estimating cumulative
impacts on global scale, based on maps representing marine ecosystems,
pressures from human activities, and sensitivity scores indicating how
sensitive each ecosystem is to each pressure.

#### Method expansions: scenario comparisons and specific taxa

This basic method has been adopted for WIO Symphony, which differs from
the original work in two essential ways:

1.  WIO Symphony is a more dynamic tool that allow scenario comparisons.
    This means that the tool can produce assessments of planned
    activities, which is at the core of MSP and may also be useful for
    other marine management. Scenario comparisons in cumulative impact
    assessments are distinctive for the Symphony applications.

2.  WIO Symphony includes representation of both marine
    habitats/ecosystems and individual marine taxa/species, whereof only
    the former was included in the original method by Halpern *et al*.
    To include both specific taxa and general habitats/ecosystems in the
    same analysis can be difficult to interpret, like comparing apples
    and pears. Therefore, to be considerate, the default setting in WIO
    Symphony is to include only habitats/ecosystems. Yet often there is
    merit to include individual taxa in the same analysis or study the
    cumulative impact on a single taxon alone. It gives you more details
    on specific animals. Inclusion of taxa are common in cumulative
    impact assessments applications.

The Halpern method for cumulative impact assessment has also been
implemented by the Helsinki Commission (HELCOM 2018), for environmental
status assessment and other means of marine planning and management.
Several independent reports and scientific studies have applied the same
method (Korpinen & Andersen 2016; Depellegrin *et al.* 2017; Fernandes
*et al.* 2017; Andersen *et al.* 2020).

### 2.2 Basic equation

Cumulative impact (*I*) is calculated by:

$$I_{sum} = \ \sum_{i = 1}^{n}{\sum_{j = 1}^{m}P_{i}{\times E}_{j} \times S_{i,j}}$$

Equation 1:

<img alt="" src="/assets/support/en/media/image6-ca4a29d63.png" width="601" height="193">

where *E* is ecosystem components, *P* is
pressures from human activities, and *S* denotes the sensitivity score.
The numbers of ecosystem components and pressures are derived from the
underpinning data layers (maps), which are all scaled between 0 and 100.
The sensitivity score is derived from a sensitivity matrix scaled
between 0 and 1. See figure below.

Calculation of cumulative impact is the default setting in the WIO
Symphony tool, and it represents the straightforward estimate of how all
human activities are affecting the entire marine environment. Very
abundant ecosystems and species will hence have a strong influence on
the results, if they are at least somewhat sensitive to pressures in the
area. See chapter **5.8**.

A meaningful aspect is that the cumulative impact result is broken down
into flow charts indicating how each pressure contributes to the impact
of each ecosystem component. See chapter **5.9**.

### 2.3 Further analyses: rarity, one-over-many, and scenario comparisons

The WIO Symphony tool enables the comparison of different scenarios,
showing how environmental impact increase or decrease at each location
based on the changes simulated from marine management measures or marine
planning priorities. See chapter **5.11** and **5.12**.

WIO Symphony is not restricted to estimates of full cumulative impact.
It also enables tailor-made analyses of how selected pressures impact
one or several selected ecosystem components, or vice versa -- these
one-over-many analyses are called MINISYM. These can be meaningful for
understanding the threats to particular species and ecosystems, or for
learning how a particular pressure or sector impact the environment in
different areas. See chapter **6.1** and **6.2**.

Moreover, it is also possible to calculate rarity-adjusted cumulative
impact, which means that the impact on each ecosystem component is
divided by the commonness of the same ecosystem component, defined as
the total sum of the ecosystem component in the area of interest. The
rarity-based cumulative impact is interesting from an ecological and
conservation-oriented perspective, as it highlights impacts on rare
species or ecosystems. See chapter **6.2**.

## 3. Main ingredients: ecosystem components, pressures, sensitivities

The main contents of WIO Symphony are ecosystem components (nature
values), pressures from human activities, and sensitivity scores. These
have been selected by the regional and national expertise from the
Western Indian Ocean through processes of workshops and questioners.

### 3.1 Ecosystem components

#### Ecosystem components represent value

Ecosystem components represent valuable parts of the marine environment.
Each ecosystem component is a map in WIO Symphony. The map indicates the
distribution or potential distribution of the corresponding ecosystem
component. Pixels of the map have values from 0 to 100, where 0 means
that the pixel is not important for the ecosystem component and 100
means that the pixel is fully covered with, or in other ways highly
important for the ecosystem component.

0 = not important

100 = fully covered or highly important

WIO Symphony includes 52 ecosystem components, available as modelled
data layers (maps) in the tool. They are split into two categories:
*habitats* and *taxa*.

#### Habitats represent environments - taxa represent important animals

Habitats refer to environments and include all animals and plants
typically associated with this environment. For instance, seagrass
meadows with all associated invertebrates, fish, turtles, birds, and
mammals. The original method by Halpern *et al.* (2008) includes only
habitats. Likewise, in WIO Symphony only habitats are included by
default.

Taxa refers to groups of animals (or other organisms). It can be types
of fish or mammals who are considered important from a social, economic,
cultural or ecological perspective and which needs to be addressed
separately. Taxa are not pre-selected for cumulative analyses in the
default mode of the WIO Symphony but can be easily added either together
with the habitats, creating a mixed model, or in isolation for studies
on the impact on those specific taxa.

#### Tropical and temperate ecosystem components

Some ecosystem components are also divided into tropical and temperate
habitats. This is because tropical and temperate environments may differ
considerably in their sensitivity to various pressures. When using the
tool, it is often reasonable to include both categories since solely
tropical areas will not contain any data of temperate habitats, and vice
versa. In transition areas, both tropical and temperate ecosystem
components are present.

### 3.2 Pressures

Human pressures are emissions, harvest, or changes caused by human
activities. Each pressure is a map in WIO Symphony. The map indicates
the intensity of the pressure, such as fishing intensity or underwater
noise level. Values range from 0 to 100 in each pixel, where 0 indicates
zero or insignificant levels of the pressure, whereas 100 indicates very
high intensity.

> 0 = zero or insignificant

100 = defined maximum intensity or highest plausible intensity

Typically, pressure value 100 is equivalent to a defined and
quantifiable level of pressure, such as "a day-frequent exposure to 140
dB re 1 µPa underwater noise level at 200 Hz". WIO Symphony contains 48
different pressures, whereof most, but not yet all, are represented as
pressure data layers (maps) in the tool.

### 3.3 Sensitivity scores

Sensitivity scores denote how sensitive each ecosystem component is to
each pressure. The sensitivity is a scale from 0 to 1 with six
pre-defined categories. Value 0 indicate no or insignificant effect,
while 1 means complete destruction of the habitat or taxa individuals.
Between these extremes are stress, injury and occasional death or
partial destruction.

> 0 = insignificant effect
>
> 1 = complete destruction

With 52 ecosystem components and 48 pressures, a total of nearly 2 500
sensitivity scores are needed (52 × 48 = 2 496). With such a great
number of sensitivities, judgement of experts is needed as it is not
deemed possible to rely solely on published literature.

The sensitivity scores are derived from an expert panel of the Western
Indian Ocean including around 50 scholars and managers, whereof about
half have contributed more actively.

### 3.4 Uncertainties and limitations

The WIO Symphony tool is meant for use at screening level and for
strategic decision making. The uncertainties in data and limitations of
the method should always be remembered. The metadata explains the
uncertainties, limitations and gaps in the underlying data/models.

The underpinning models, currently 88 pieces, are based on open-source
data. The basic method (chapter **2**) does [not]{.underline} account
for:

- temporal variation

- connectivity

- food-web interactions

WIO Symphony is not suitable for use at high spatial resolution and does
not replace the need for detailed mapping and in-depth studies.

### 3.5 Tool implementation and access

WIO Symphony tool is operating at the server of the Nairobi Convention.
All member states of the convention, and invited partners, have access
to the tool and data. Temporary or permanent log-in to the implemented
tool can be achieved by the Nairobi Convention Secretariat, and
underpinning data are open-source and accessible. The tool software code
is also open source and available for anyone at GitHub.

## 4. Before using the tool

### 4.1 Use WIO Symphony alongside other methods

WIO Symphony is one tool of many, and focuses solely on addressing
environmental impact.\
It does not include socio-economic parameters or sector conflicts. It
also does not replace or reduce the need for ordinary environmental
impact assessments (EIA) and scientific studies.\
It provides a valuable overview, helping the user to see the bigger
picture and frame more detailed studies.

### 4.2 Use at an appropriate scale -- most suitable for large areas

WIO Symphony covers a large extent, approximately 9 percent of the
world's oceans, from the southern tip of India in the east, to the
western coast of Africa. The resolution is 1 km x 1 km, which is very
high relative to this extent.

This resolution is intended to support regional and potentially national
plans. However, some of the layers are based upon data with a resolution
poorer than 1 km. Users should, therefore, be careful when using WIO
Symphony outputs at smaller, local scales.

In general, the smaller your analysis, the more likely it is to contain
artifacts or noise from the spatial models used to produce each layer.
If you are working at smaller scales, we strongly recommend that you
inspect the metadata of the layers you are including in your analysis to
determine if they are appropriate to include.

The smaller area you choose to analyse, the less accurate overview you
get from the analysis, due to the very large grid, spanning
approximately 9 percent of the world's oceans, and the pixel size of 1 x
1 km. This should be remembered in relation to the scale you are working
with. For example, a result from a small bay should be interpreted with
high caution.

The smaller area you choose to analyse, the less accurate overview you
get from the analysis, due to the very large grid, spanning
approximately 9 percent of the world's oceans, and the pixel size of 1 x
1 km. This should be remembered in relation to the scale you are working
with. For example, a result from a small bay should be interpreted with
high caution.

### 4.3 Carefully consider what to analyse: Types of analysis and elements to include

Before conducting an analysis, carefully decide which pressures and
ecosystem components you wish to include. The default settings offer a
solid starting point, but you may wish to customise the analysis in
certain cases. Also, consider alternative types of analyses you may wish
to conduct. You have the options to select among different algorithms
and you can perform a full cumulative analysis or focus on
"one-over-many\" approaches (MINISYM). To identify more suitable
locations for a specific sector, try adding specific pressures
throughout the area and observe where the impact is minimised. If you
work on Marine Spatial Planning (MSP), you will likely want to compare
different scenarios, which you could simulate carefully based on your
planning framework. Additionally, conducting various well-organised
analyses often improve understanding. Be sure to rename your scenarios
to keep track of them throughout the process.

### 4.4 Feedback us your critique

Constructive critique improves the quality and transparency of WIO
Symphony. Data layers in the tool will always have room for improvement.

The WIO Symphony team urges you as users of the tool to **come with
input on improvements**, whether it is something specific such as a data
layer within your expertise, or improvement of the tool itself.

Contact us with your experiences, solutions, best practices, or feedback
through the email <wiosym@nairobiconvention.org>, or at [GitHub: WIO
Symphony](https://github.com/WIOSymphony/wiosym).

**Examples of critique that have led to improvements**

You can see examples of critique that have led to revisions are data
layers that were constructively criticised during first tests and
tutorials in this table:

  -----------------------------------------------------------------------
  **Data layer**          **Critique**            **Action**
  ----------------------- ----------------------- -----------------------
  Algae farming           Data accidentally       Revised in April 2023
                          include both algae      
                          farms and mariculture   

  Mariculture             Not populated with data Revised in April 2023
                          (see above)             

  Cold coral reef         Depth limit is          Revised in April 2023
                          currently too shallow   
                          (40 m), to be moved to  
                          deeper colder water     

  Penguin feed ground and Models erroneously      Revised in April 2023
  fur seals               extend far into         
                          tropical waters         

  Whale shark             Unreliable peak by Cape Revised in April 2023
                          town                    

  Baleen whales           Missing available data  Revised in April 2023

  Temperature rise        Overestimate the impact Revised in September
                                                  2024

  Ocean acidification     Overestimate the impact Revised in September
                                                  2024

  Sea level rise          Overestimate the impact Revised in September
                                                  2024
  -----------------------------------------------------------------------

## 5. User manual

This manual version of 19 December 2025 is based on the software version
1.22.2.

<img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7.JPG" width="605" height="299">

### 5.1 Support

Find the latest version of this manual by clicking the user icon <img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7-c2ffff76f.JPG" width="23" height="25">, then click Support <img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7-c17a1d296.JPG" width="74" height="25">

(The previous manual version to this was one was from 13 December 2023
and based on the\
software version 1.14.2. That manual was in turn based on the initial
WIO Symphony manual\
version from 30 November 2022, based on the software version 1.6.0.

### 5.2 Change language

WIO Symphony is available in three languages:

- <img alt="undefined" src="/assets/support/en/media/image8.png" width="38" height="19"> English

- <img alt="" src="/assets/support/en/media/image9.png" width="28" height="19"> French

- <img alt="" src="/assets/support/en/media/image10.png" width="31" height="19"> Swedish

Change language by clicking the user icon <img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7-c2ffff76f.JPG" width="23" height="25">, then click Change language <img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7-c47cb24bf.JPG" width="113" height="25">.

### 5.3 See software version

Click the user icon <img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7-c2ffff76f.JPG" width="23" height="25">, then click About <img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image7-c683fac6f.JPG" width="74" height="25"> to see which software version you have.

### 5.4 Important notes before composing Symphonies

#### Web browser can matter

The web browser can matter for the tool's performance. If your screen or
the functionality appears wrong or incomplete, please **try another
browser**. Google Chrome typically works.

#### Refresh page cache can help

Whenever something does not work, try to refresh the web page with
deleted cache. Refresh the page, either by **ctrl + shift + R** or
**ctrl + F5**. This is always recommended when using WIO Symphony again
after periods of inactiveness. By doing this, you make sure recent
updates to the tool are incorporated to your analysis. This is
especially important when you want to start over or begin a new
analysis.

<img alt="" src="/assets/support/en/media/image11.png" width="605" height="155">

#### Use at an appropriate scale -- large areas

WIO Symphony is designed for regional or national planning, as noted in
Section 4.2. The tool may be less useful when planning for areas smaller
than 1 km -- such as narrow bays or small islands -- as these areas will
be represented by a single pixel. It is challenging to give a specific
area size limitation, although larger areas generally yield more
accurate spatial patterns of ecosystems, pressures, and impacts.

As a rule of thumb, avoid analysing areas smaller than 250,000 km^2^
(250,000 pixels), which is equivalent to an area of 500 x 500 km.

Some layers, such as those representing coral, have finer resolutions,
but WIO Symphony is still best suited for analysing vast areas. The
smaller the area selected, the less accurate the overview becomes. If
you wish to analyse areas smaller than 250,000 km^2^, please inspect the
metadata of the layers you intend include to ensure they are appropriate
to use at that scale.

#### Smaller areas Better for Practice

Analysing the *Whole grid* or other very large areas takes time and
consumes disk space. Stick\
to **smaller areas when practicing**.

#### Customise Colour Scale for Clarity

The colour scale for cumulative impact ranges from transparent and blue
to orange and red. In the default setting, the red colour corresponds to
90-100% of the maximum cumulative impact value in your analysis. When
analysing large areas that include both coastal and offshore waters, it
is likely that much of the offshore area may remain transparent, as
higher cumulative impact scores tend to occur in coastal, shallow
waters. To create a more visually informative image, consider
**customizing the colour scale**. This scale is relative and will not
affect your results. For further details on customization options, see
chapter **5.8.**

#### The return symbol takes you to main menu

<img alt="" src="/assets/support/en/media/image12.png" width="605" height="102">

When working in a scenario or calculation,
you sometimes might feel stuck to those menus. The blue left-pointing
arrow in the bottom left corner will **take you back to the main menu**.

#### Clear the map

Clear off the colour map by **pressing the bin symbol** to the right,
below the magnifier glasses.

<img alt="" src="/assets/support/en/media/image13.png" width="605" height="119">

#### Zoom, Edge smoothing and transparency

Zooming in/out on the map is possible by scrolling the mouse wheel or
use the magnifier glasses. Pixel/edge smoothing (anti-aliasing) can be
toggled on or off in the map overview by clicking the pixel symbol
below. This makes the pixels smoothened or exact. A bar that sets the
transparency of the background map is adjustable on the bar below.

<img alt="" src="/assets/support/en/media/image14.png" width="302" height="375">
<img alt="" src="/assets/support/en/media/image15.png" width="301" height="375">

### 5.5 Boundary polygons

The main page, shown below, appears when you log in to the tool, or when
you navigate back to the *Areas* tab (the globe symbol). Boundary
polygons are essential for all analyses in WIO Symphony. The tool
includes several of pre-loaded shapefiles that can be used. You activate
a boundary polygon by **unticking the eye**
<img alt="" src="/assets/support/en/media/image16-cb9be6243.png" width="17" height="12"> **symbol**. By clicking the arrow button
next to the list of areas, you will get an extended list of the included
sub-areas in that categories that you can choose directly from.

<img alt="" src="/assets/support/en/media/image17.png" width="605" height="309">

The *Whole grid* area represents the full WIO Symphony grid. This grid,
or *bounding box*, spans the Western Indian Ocean and part of the
South-Eastern Atlantic. Calculations within this *Whole grid* area is
computationally intensive and consume a lot of space on your user's
memory. For most analyses, it's more efficient to target smaller areas.
Pre-loaded polygons include;

Natural boundaries

- *Climate zones* (tropical, temperate)

- [*LME*](https://worldoceanreview.com/en/wor-5/improving-coastal-protection/the-art-of-coastal-management/large-marine-ecosystems/) (2017)
  (large marine ecosystems)

- *[Marine
  ecoregions](https://bioone.org/journals/bioscience/volume-57/issue-7/B570707/Marine-Ecoregions-of-the-World--A-Bioregionalization-of-Coastal/10.1641/B570707.full)*
  (from Spalding *et al.* 2007)

Other

- *ABNJ* (Areas Beyond National Jurisdiction)

- *National waters* (all water except ABNJ)

- *Coastal waters* (coastline +2 nautical miles)

- [*Protected Areas
  Marine*](https://www.protectedplanet.net/region/AF) (2023) (these
  areas partly but not fully correspond to existing MPAs)

You can create custom boundary polygons by **using the draw-polygon
button**. Note that you may click on the *land* or outside of the *Whole
grid* area when drawing polygons. However, since the data is only
available within the *Whole grid*, the sections of your polygon that are
outside the grid will not contain data in calculations. Ensure that at
least part of your polygon is within the *Whole grid*. Your created
polygon will be saved under *User-created Areas*.

<img alt="" src="/assets/support/en/media/image18-cfd1d1dd4.png" width="598" height="432">

It is also possible to upload new boundary polygons using the **Upload
new area** symbol. Note that the file will be in a GeoPackage (gpkg)
format. Similar to drawing your own polygon directly in the tool, your
imported polygons will not be cropped to the *Whole grid*, but the tool
will only calculate pixels within the grid. However, it is encouraged to
crop your polygons before importing them in to the tool. This is solved
by **cropping your shape file with the WIO Symphony boundary box** (same
extent as the *Whole grid*). The boundary box is available and can be
requested from <wiosym@nairobiconvention.org>.

<img alt="" src="/assets/support/en/media/image19.png" width="605" height="290">

You click on a polygon to activate it for analysis. You start the
analysis by **clicking inside the polygon** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **move to the *Scenarios* tab**
<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **press the plus**
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> **symbol**. See chapter **5.8**.

You can also merge areas to create new boundaries by clicking Alt+
Shift+ Click, this will\
merge polygons.

You will see a new area under *User-created Areas*, you might consider
to rename your new areas by clicking *Edit area* 🡪 *Rename area*. See
chapter **5.13**.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image23.JPG" width="605" height="307">

<img alt="A map of the ocean Description automatically generated" src="/assets/support/en/media/image24.JPG" width="605" height="305">

As user, you can also download the shapefile bundle for areas. Area
polygons can be downloaded for use in external GIS software. Simply
right-click the polygon you have selected and press *Download shapefile
bundle* (.zip). This enables you to conduct further analyses in GIS with
the same boundaries as in WIO Symphony.

<img alt="" src="/assets/support/en/media/image25.png" width="605" height="322">

### 5.6 View data layers

A total of 52 ecosystem components and 48 pressures are listed in the
WIO Symphony tool, whereof 88 have been modelled and are available as
data layers (maps). Clicking on the **ecosystem component** tab lets you
view the different habitats and taxa. Similar, the **pressures** tab
lets you view the pressures categorised by sector. **Untick the eye**
<img alt="" src="/assets/support/en/media/image16-cb9be6243.png" width="17" height="12"> **symbol to view\
the data**.

A brief summary of metadata and data sources is available. **Press the
info**
<img alt="" src="/assets/support/en/media/image26.png" width="10" height="11"> **symbol** by each ecosystem component
or pressure. The dialog box provides a method summary of the layer,
including a link to access that particular layer. In addition, known
limitations are stated, as well as value range, processor, and data
sources.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image27.JPG" width="605" height="304">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image28.JPG" width="610" height="320">

Some layers are still empty, but can be included in analyses,
nonetheless. Empty layers are:

  -----------------------------------------------------------------------
  **Ecosystem components**            **Pressures**
  ----------------------------------- -----------------------------------
  Mesophotic coral                    Invasive species

                                      Pelagic gillnet

                                      Pelagic trawl

                                      Sport fishing

                                      Seabed mining

                                      Impulsive noise

                                      Infrastructure

                                      Renewable energy

                                      Oilspill risk

                                      Shark control

                                      Research sampling
  -----------------------------------------------------------------------

It is recommended to **close the data display again** (tick the eye
<img alt="" src="/assets/support/en/media/image16-cb9be6243.png" width="17" height="12"> symbol) before moving on, otherwise you
might be swamped by many open data layers displayed at the same time. If
this happens it is often easiest to simply refresh the browser and start
over.

Some pressures and ecosystem components are listed but still not
available (they are unticked). This is either because they are expected
to be modelled and uploaded soon, or because they may be important for
scenario-building (for example, *Renewable energy* installations or
*Oilspill risk*). See chapter **5.11**.

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image29.JPG" width="605" height="304">

### 5.7 Notes on individual data layers

Some data layers deserve **special attention**:

- *Seismic survey*. This pressure has strong influence when included.
  However, the impact is temporary, where the existing data layer shows
  already conducted (past) surveys. Since surveys can provide lasting
  data, it is unlikely that a survey is repeated. The seismic surveys
  shown in the data layer hence refers to past, not ongoing, impact.

- *Impulsive noise*. Construction works such as pile driving can
  generate harmfully loud noise peaks. The pressure map is currently
  empty but can be populated by manually adding of constant (1-100).
  This pressure is temporary and should preferably by analysed alone
  (for example, MINISYM), typically not as part of the full model. A tip
  here would be to use an analysis of several areas, since you then can
  differentiate pressures within the same scenario. This could perhaps
  be combined with the "difference" function ("clip out" from a larger
  surrounding polygon) to get a realistic output.

- *Oilspill risk*. Larger oil spill is a very rare and unpredictable
  pressure. Like impulsive noise it is also rather temporary and should
  preferably not be mixed with other pressures. Oil spill analyses can
  however be suitable for MINISYM analyses.

- *Infauna*. This is a broad taxon that exists in all soft marine
  habitats. Because the habitat ecosystem components already include
  invertebrates per default, it may be considered double counting to run
  the analysis with infauna along with other. Studying impacts on
  infauna specifically can be done through MINISYM.

- *Mobile epifauna*. Same as *Infauna* above, but even more pronounced
  results if included with other ecosystem components.

- *Dugongs*. Some very rare species like dugongs have widely spread data
  layer. This is to mark important potential habitat rather than
  indicating extensive abundance of them.

- *Rays and skates*. These organisms are common and this data layer
  gives strong emphasis to them. Therefore, it is recommended not to
  include this ecosystem component in general analyses with many other
  ecosystem components.

### 5.8 Calculate cumulative impact

Cumulative impact is the straight-forward estimate of the impact of all
selected pressures on all selected ecosystem components combined.

You calculate cumulative impact by **selecting an area**
<img alt="" src="/assets/support/en/media/image30.JPG" width="20" height="18"> <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenarios* <img alt="A white calculator on a blue background Description automatically generated" src="/assets/support/en/media/image31.JPG" width="18" height="18"> and **click on the plus sign**<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **select/unselect data layers** in
*Ecosystem Components* <img alt="A white fish on a blue background Description automatically generated" src="/assets/support/en/media/image32.JPG" width="16" height="16"> and *Pressures*<img alt="A white person on a blue background Description automatically generated" src="/assets/support/en/media/image33.JPG" width="16" height="15"> to be included <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenario* tab
<img alt="" src="/assets/support/en/media/image34.png" width="18" height="17"> <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **rename your scenario if relevant by
clicking on the pencil**
<img alt="\\\\storage.slu.se\\home_2\$\\cect0003\\Documents\\PhD\\Departmental work\\WIO Symphony\\WIO_symph.png" src="/assets/support/en/media/image35.png" width="17" height="22"><img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **press** **CALCULATE** button (refer to
the picture below).

In the ecosystem components tab and pressures tab, you are able to
choose which data layers to include in an analysis. **Ticked data layers
are selected and will be included**. This is true as long as there is a
map available, which can be checked by unticking the eye
<img alt="" src="/assets/support/en/media/image16-cb9be6243.png" width="17" height="12"> symbol.

You may wish to double-check that all your intended pressure and/or
ecosystem components are selected. As you have noted, individual data
layers may be selected even if the category is not ticked. This is
because some layers within the category might be available, while some
are not.

<img alt="A map of the ocean Description automatically generated" src="/assets/support/en/media/image36.JPG" width="605" height="304">

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image37.JPG" width="605" height="299">

<img alt="A map of the ocean Description automatically generated" src="/assets/support/en/media/image38.JPG" width="605" height="310">

<img alt="A map with a blue border Description automatically generated with medium confidence" src="/assets/support/en/media/image39.JPG" width="647" height="332">

<img alt="A map of the state of egypt Description automatically generated" src="/assets/support/en/media/image40.JPG" width="650" height="334">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image41.JPG" width="656" height="324">

#### The resulting map highlights areas within your region where cumulative impact is relatively high (red) and relatively low (transparent). Keep in mind that offshore areas often include fewer number of ecosystem components, making direct colour-based comparisons between coastal and offshore areas difficult. It can be reasonable to look for hotspots, both coastal and offshore, even if offshore hotspots display only moderate colour intensity options for cumulative impact calculations.

This above-described procedure runs a default analysis, but several
options beyond default settings exist.

**What to include?** In default mode, habitats are selected, but not
individual taxa. Analysing only habitats is the most balanced model and
is similar to the original method by Halpern *et al.* Nevertheless, this
can be changed by ticking the empty boxes for taxa of your choice, such
as *Tuna and billfish*. Or *Mammals*, *Birds*, *Turtles* etc.

**Algorithm**. Cumulative impact is the default algorithm. See chapter
**6.3** for the alternative rarity-adjusted cumulative impact, which may
be suitable from a conservation viewpoint.

**Sensitivity Matrix**. The default sensitivity matrix is the final
revised product of the WIO expert panel. The panel includes a number of
regional experts following a protocol including large group discussion
(50 experts), anonymous scoring (19 experts), and review (workshop and
open review).

By selecting *User-defined matrix* and *Edit Matrix* it is possible to
manually change the sensitivity to any specific combination of pressure
and ecosystem component, motivated by new knowledge or simulation of
management measures. See chapter **6.5**.

**Result Colourmap**. Result of a cumulative impact calculation is a
unit less, relative, index which can be called an impact score. The
resulting heat map simply display this index from transparent and blue
to orange and red. The tool's default colour scale setting is per
automatic the *95e percentile in MSP area*. However, it is recommended
to use *Maximum value in computed area* (your selected boundary polygon)
as default for your calculation.

If selecting the *95 percentiles in MSP area*, the colour scale will
scale towards the 95 percentiles of the fully loaded *Whole grid*
scenario instead of your maximum. Since the *Whole grid* contain a lot
of offshore water, the 95 percentile is a rather low value. This
typically generates more colourful, but less detailed result maps.

If selecting *Mean +multiple of standard deviation*, the result colour
map sets its max value to the dataset means +some user-defined multiple
of the standard deviation.

If selecting *User-defined value*, you will assign a customised value
for the colour scale maximum. This can be recommended when demonstrating
results for others or for increasing the optical resolution in either
too-red areas (impact hotspots) or transparent areas (low-impacted
offshore areas). You may want to run a primary analysis and then read
the report to find reasonable numbers for the customised colour scale,
such as using the average value or a certain percentage of the maximum
value. You may also set the colour scale in relation to environmental
impact benchmarks.

Changes to the result colour map do not affect the impact index or
numbers. It only changes the scale of colours. Changing colour scales
can be done sequentially in your GIS program after downloading the
resulting map from WIO Symphony. See chapter **5.9**.

<img alt="A map of the ocean Description automatically generated" src="/assets/support/en/media/image42-c85720557.JPG" width="689" height="398">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image43.JPG" width="673" height="329">

Above the list of scenarios under the *Scenario* and *Previous
calculations* tabs, you can filter your scenarios by name and sort by
name or date, making it easier to find the scenarios you are looking
for.

### 5.9 Cumulative impact Calculation Report

All analyses create a *Calculation report*. The report provides both an
overview and a detailed result.

#### Impact map and basic statistics

The scenario name and impact colour map are shown in the upper left
corner. The same resulting map can be exported (downloaded) as a raster
file by pressing **EXPORT AS GEOTIFF**.

In the upper right corner, you find applied baseline versions, settings,
and summary statistics for the report. *Calculated area* is crossed
because the WIO Symphony projection in the data raster does not allow to
calculate the surface measurement programmatically.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image44.JPG" width="672" height="324">

#### Top-5 summary table

A summary of the top-5 contributing pressures and the top-5 ecosystem
components affected are provided as numbers and bars. Note that the
colour legend is also related to the *Colourmap* (the colours match).

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image45-ccd6e611e.JPG" width="682" height="359">

#### Sankey diagrams show contribution flows

The report also provides a Sankey diagram, which gives an informative
illustration of the main (largest) impact flows. This means that you can
see how relatively much each major pressure (left axis) contributes with
environmental impact to each of the main impact-receiving ecosystem
components (right axis). Wide flows indicate that the impact is
proportionally large.

The Sankey diagram allows you to get a good understanding of the
details. You can see which of the pressures that dominate the impact on
each ecosystem component. Precise numbers are given when you hover with
your mouse across the impact flows. Keep in mind that uncertainties are
large and numbers should be interpreted as orders of magnitude, rather
than to decimals.

<img alt="A screenshot of a calculator Description automatically generated" src="/assets/support/en/media/image46.JPG" width="671" height="370">

#### Scenario parameters and statistics

The report provides *Scenario Parameters* (only relevant after scenario
simulations) and a table showing the details of contributions and
receiving numbers behind the above diagrams. In a later scenario where
you have made pressure changes, they will be shown under *Scenario
Parameters*. Note in the red box that if you have made general or area
specific changes, they will be shown here, as well. These numbers, in
even more detail, can be downloaded and analysed separately by pressing
the **EXPORT AS CSV** button.

<img alt="" src="/assets/support/en/media/image47.png" width="229" height="123"><img alt="" src="/assets/support/en/media/image48.png" width="605" height="442">

#### Histogram of impact scores

The report histogram shows a number of pixels (y-axis) across different
levels of impact score (x-axis). Move your mouse along the bars to
inventory check numbers. This can be useful information when customizing
the colour scale or correlating impact scores to environmental impact
benchmarks. In areas with both coastal areas and vast offshore areas,
the histogram will show a strong L-shape.

<img alt="" src="/assets/support/en/media/image49.png" width="577" height="396">

*\*

*End of report*

Lastly, at the end of the report, further information is provided of
when the report was created, how WIO Symphony was created, how to cite
and the license, as well as the people behind the tool and its
contributors.

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image50.JPG" width="691" height="355">

A final function in the reports is the **PRINT** button. This gives you
the option to print or save the report as a PDF, for example.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image51-c34a9fc9a.JPG" width="693" height="302">

### 5.10 Erase and reset

Colour maps are removed by pressing the **bin** symbol. You can retrieve
the colour map again by clicking on your scenario under the *Previous
Calculations* tab. If you wish to delete a scenario, press the small
**red bin** symbol. This is possible for your previous scenarios as
well, under the *Scenarios* tab. To view the report again, press the
**report** icon, and to **rename scenarios** press the rename icon next
to it**.** To view it in the map frame, press the **eye** icon.

<img alt="A map of the world Description automatically generated" src="/assets/support/en/media/image52.JPG" width="684" height="325">

If you wish to delete previous calculations, press the **enter
multi-selection mode** and select the previous calculations in the list
that you want to remove. Thereafter, click **DELETE** to delete them.

<img alt="" src="/assets/support/en/media/image53.png" width="605" height="325">

Your selection of included data layers can be reset by returning to the
pressure tab and ecosystem component tab and press the **RESET** button.
Now, the default selection is restored. This **reset will also remove
changes** you have done to scenario simulations (changed/added values
for individual pressures).

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image54.JPG" width="685" height="273">

### 5.11 Create and analyse scenarios

A main functionality in WIO Symphony is to make changes to an area and
compare the results with a baseline (no-change) scenario of the same
area. Otherwise, it is possible to make two different changes to an area
and compare the two.

This way, you can simulate the environmental impact if a marine spatial
plan (MSP) is implemented or if a management plan of a marine protected
area (MPA) is followed.

First, select an area and create a baseline scenario by **selecting** or
**drawing** a **boundary polygon** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenario* tab, and **click a plus
sign** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Ecosystem components/ pressures*
<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> select which data **layers to include**
(ticking) <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **rename your scenario** with (for
example) prefix "Baseline" on the pen
<img alt="" src="/assets/support/en/media/image55-c64a8ed9d.png" width="10" height="10"> symbol <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **CALCULATE**.

<img alt="A map of a country Description automatically generated" src="/assets/support/en/media/image56.JPG" width="692" height="332">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image57.JPG" width="694" height="341">

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image58.JPG" width="695" height="333">

Then study the *Calculation Report* or other information (such as your
draft MSP plan) and develop an understanding of appropriate changes that
you wish to simulate. When testing the tool, you have no restrictions.
In real life, you will probably consult marine spatial planners and
stakeholders, or MPA documents and stakeholders if you are working with
conservation.

Press the *Return*
<img alt="" src="/assets/support/en/media/image59-c44c30ef7.png" width="11" height="12"> symbol to go back and out of the current
baseline scenario you just created and analysed. You may also want to
erase the baseline colour map by pressing the **bin** symbol.

Next step is to simulate the changes of pressures inside your boundary
polygon, based on new ways of using the area. Such simulations can be
done in four ways, first pressing the adjustment
<img alt="" src="/assets/support/en/media/image60.png" width="13" height="12"> symbol:

1.  **Reducing a pressure by percentage**, meaning that the current
    levels of that pressure from a human activity is reduced with a
    specified percentage across the whole area of analysis: drag
    intensity percentage to the left, click the downward arrow within
    the percentage square or type in the percentage change you want.

2.  **Adding a pressure by percentage**, meaning that the current levels
    of that pressure is intensified in the same places as it is
    currently existing, within the area of analysis: drag intensity
    percentage to the right, upward arrow within the percentage square
    or type in the percentage change you want.

3.  **Completely removing a pressure**, meaning the pressure is no
    longer occurring at all in the area: set the percentage to -100%.
    Note that if you untick a pressure in your scenario, but it is still
    in the baseline, the comparison later on will not generate a report,
    since it cannot compare the changes anymore.

**Add new pressure scores across the area**, regardless of whether the
pressure already exists in the area. This action adjusts a *constant
value*: type in a number in the *Constant* field, to represent the
pressure intensity applied to each pixel in the area. For example, a
value of 100 indicates full coverage of the pressures on every pixel
across the entire selected area.

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image61.JPG" width="645" height="328">

Changes made in this example (see figures below):

- Increased existing *Algae farming* with +50%

- Completely banned (removed) *Dredging* and *Dumping* with -100%

- Increased *Coastal tourism* and *Boating* with +30%

- Moved out *Shipping* from the area, thus removing shipping related
  pressures with -100%

<img alt="" src="/assets/support/en/media/image62.png" width="605" height="396">

<img alt="" src="/assets/support/en/media/image63.png" width="605" height="397">

Go to *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **rename** your scenario with, for
example, prefix "MSP" <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> move to the *Pressures* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> make **changes to relevant pressures**,
corresponding to your simulated plan <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> return to the *Scenarios* tab
<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **CALCULATE** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> have a look at the report <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press the **Return** symbol to get back.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image64.JPG" width="696" height="328">

Under the *Scenario Changes*, you can show the changes you have made by
pressing the arrow
<img alt="" src="/assets/support/en/media/image65-ccebc2cf6.png" width="15" height="12"> button, making sure you have not missed
any before calculating. This box only shows the pressures you have
actually changed, and does not show the ones that are removed, since
that might be many with all the pressures removed by default. For
pressures with values of -100%, only activities names will be shown.

<img alt="" src="/assets/support/en/media/image66.png" width="605" height="223">

At the **cog wheel** icon, you have the option to transfer changes from
an existing scenario or scenario area if you wish to apply the same
ones. This is useful if you wish to do the pressure changes to different
areas. Press the arrow
<img alt="" src="/assets/support/en/media/image65-ccebc2cf6.png" width="15" height="12"> button to view previous scenarios with
changes. The round button refers to the scenario's general changes. If a
scenario is chosen within several areas, the user is provided with an
opportunity to choose changes from one of those areas. If the square
tick box is ticked, then it will replace all changes. So, if there are
changes in the output scenario, these will be removed first. If this box
is unticked, the user can add changes. Changes in the output scenario
will remain, although overwritten if a change to the same pressure or
ecosystem component occurs in the scenario where it is originally from.

<img alt="" src="/assets/support/en/media/image67.png" width="605" height="205">

On the **table icon** next to the **cog wheel**, there is a tabulated
overview of all the changes made in the scenario. This intuitive table
lets you adjust all the changes you have made, similarly like previously
back at the *pressures* tab, however, without going back there. By
clicking the pen
<img alt="" src="/assets/support/en/media/image55-c64a8ed9d.png" width="10" height="10"> button, you may adjust both the percentage
increase/decrease and constant of the changes you made before, which is
especially helpful for complex scenarios.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image68.JPG" width="315" height="157"> <img alt="A screenshot of a login Description automatically generated" src="/assets/support/en/media/image69.JPG" width="309" height="151">

In previous versions of WIO Symphony, when a scenario was being edited,
the tool itself saves all changes made (to the scenario) by the user at
a regular interval, and following certain actions such as starting a
calculation or leaving the edit mode. The new, and current, feature
makes the saved state of the active scenario explicit to the user. A
notification/button alerts the user if the user interface displays
unsaved changes (left figure above). Clicking the notification *Unsaved
changes* persists the scenario setting to the database (right figure
above). This interactive save scenario function is to give the users the
certainty that the made changes have been saved.

Now when the "MSP" scenario has been simulated, you might have noticed
some differences in the reports between the "Baseline" and the "MSP"
scenarios. However, the full comparison will be computed to have
quantitative results, which are easier to interpret. See next chapter
**5.12**.

### 5.12 Compare two scenarios

Two scenarios from the same boundary polygon(s), such as the "Baseline"
and "MSP" scenarios, can be compared using the *Compare Calculations*
tab. By default, the compare calculations will be set to *Implied*
*baseline*, which lets you automatically compare your scenario (with
changes) to that scenario's implied baseline.

Move to the *Compare Calculations* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> select your "Baseline" scenario as
Calculation A and your "MSP" scenario as Calculation B <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **COMPARE CALCULATIONS**. There
are two ways under *Customise colour scale* to showcase the differences.
This enables you to compare two scenarios that both have changes that
are different.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image70.JPG" width="605" height="294">

The first adaptive colouring range for the comparison report is the
default *Constant maximum (45%)*.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image71.JPG" width="605" height="294">

The second is the *Dynamic maximum*, adapting the colour scale maximum
to the actual max value of the specific comparison, instead of a set min
and max of 45.

The *Calculation Comparison Report* that pops up once you click *Compare
Calculations* generates a graphic illustration of differences in
cumulative environmental impact. More orange-red colours equal an
increase in cumulative impact, while more green-blue colours equal
decreased environmental impact.

<img alt="A screenshot of a graph Description automatically generated" src="/assets/support/en/media/image72.JPG" width="605" height="479">

In the associated summarizing table of Cumulative impact, the *Relative
change* gives an indication of total outcome, across the whole area. For
this example, where you have increased algae farming and tourism, while
reduced dredging, dumping and nearby shipping, the net result of the
cumulative is -3.15%, which is positive for the environment.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image73.JPG" width="605" height="457">

Being basically the same, the *Dynamic maximum* report provides
identical information as the default Constant maximum (45%). However, as
previously said, the difference lies in the map illustration. Note that
the differences on the map will be more visible in a larger area
compared to this quite small one.

<img alt="" src="/assets/support/en/media/image74.png" width="604" height="683">

Similar to a regular scenario report, the comparison report provides a
Sankey diagram. However, this is split up in two different diagrams, one
with increasing pressure (above) and one with decreasing pressure
(below).

<img alt="" src="/assets/support/en/media/image75.png" width="604" height="691">

Similar to a scenario report where you have done changes, the comparison
report lists the changes under *Scenario Parameters*. Below, the section
to the right lists all the changes we have made for the MSP scenario,
while to the left, the baseline is left as a default analysis.
Additionally, we can, in detail, see the specific relative change for
all the included ecosystem components and pressures, which was
summarised in the beginning of the comparison report.

<img alt="" src="/assets/support/en/media/image76.png" width="604" height="674">

Comparisons can be exported as **CSV** and **GEOTIFF** files, as well as
printed and saved, just like the regular scenario reports.

By comparing different MSP options with a baseline, or with each other,
the planner can analyse one or several MSP zones and evaluate solutions
in an iterative process, easy to communicate to sector representatives
and other stakeholders.

### 5.13 Compound comparison

The compound comparison feature lets you select multiple calculations
containing projected changes and compiles a dataset consisting of the
comparative changes with respect to an "implicit" baseline calculation
for the same geography. The results may then be downloaded as either
JSON data or an ODS spreadsheet document (Excel).

After selecting two or more previous calculations through the
**multi-selection mode**, click the **generate comparison data** icon
<img alt="" src="/assets/support/en/media/image77.png" width="12" height="13">. This enables you to set at title for
the compound comparison, and calculate the result via the **CALCULATE**
button.

<img alt="" src="/assets/support/en/media/image78.png" width="605" height="309">

After the calculation is done, you will get a summary of your compound
comparisons. Once you have generated your first compound comparison, a
new tab icon will appear called **Compound comparisons**, that show you
previous calculations. Click the **Download compound comparison** icon
<img alt="" src="/assets/support/en/media/image79.png" width="11" height="14"> to get the comparison results.­­­­­

<img alt="" src="/assets/support/en/media/image80.png" width="605" height="310">

The final step provides a few choices. As previously mentioned, select
the format to download, either as data or as spreadsheet (**JSON** or
**ODS**). You can decide to include or exclude unchanged results for
JSON, and for ODS you also have to option to include combined dataset or
not.

<img alt="" src="/assets/support/en/media/image81.png" width="528" height="283">

With this feature, you are able to compare completely different
scenarios for different geographies. The exported data result could then
be used for further analyses.

### 5.14 Select, Merge or Split several polygons

Another functionality of the updated WIO Symphony that did not exist in
earlier versions is to select, merge or split polygons.

Select multiple areas by first selecting a single area. Then, hold down
the Ctrl key and **left**-**click** to select additional polygons.
Selected polygons will be treated as a single entity for calculations.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image82.JPG" width="650" height="315">

You can also select two or more polygons and **merge** them into one by
first selecting one or more, and on the final one hold **Alt** +
**Shift** + **left click**. This triggers a dialog box (see figure
below) that enables saving the result of merging both areas together as
a new user-defined area, or overwriting either of the merged areas
(option available if the one to overwrite is already a user-defined
area). This will be saved under *User-created Areas* where you can
rename it.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image83.JPG" width="671" height="323">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image84.JPG" width="674" height="321">

A final function is to **cut** or **split** an area by intersection. To
cut, first select a polygon and then hold **Alt** + **left click** to
select the polygon that you want to cut out. This is a function for the
so-called *Differential zoning*, using two distinct, overlapping areas.
This triggers a dialog box allowing the user to create new areas based
on the intersection and relative complements of the active selection. By
clicking *Save to "User-created areas"*, the intersected polygon will be
saved there.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image85.JPG" width="661" height="320">

You will see the new polygon with the inner area cut out. You can also
rename it by using the \'Edit area\' option.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image86.JPG" width="668" height="300">

To split a larger polygon into smaller areas, select the larger polygon,
then hold Alt and click on the smaller polygons that intersect or
overlap with it to activate the Differential Zoning tool. Ensure that
the areas you want to split have sections that intersect, overlap, or
fall within the larger polygon.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image87.JPG" width="684" height="336">

Additionally, in the dialog box within the Differential Zoning tool, an
intersecting area may provide more than one slice to save as new areas,
depending on how it overlaps with other areas. You can enable specific
polygons to be saved as new areas by ticking the checkboxes in the top
left corner. Refer to the figure below for the available options.

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image88.JPG" width="684" height="336">

### 5.15 Analyse several polygon areas

With the merge and split polygons functionalities described in chapter
5.10, the tool allows scenario analyses of spatial extents spanning
multiple calculation areas, and for different areas within the same
scenario to have separate sensitivity matrices. This enables the option
to create a proper MSP, by including all areas that the plan
encompasses, and use this function to apply area specific changes
according to the MSP. Hence, the user can compare this MSP with another
if the same areas are used, but with different changes.

After selecting two or more polygons, go to the *Scenario* tab
<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="9"> button. This leads you to the user
interface seen below. Here we can go back to the *Pressures* tab and do
changes to our scenario, such as adding *Diving* with a 10 constant,
increasing the diving tourism in all\
three areas.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image89.png" width="605" height="502">

Going back to the *Scenarios* tab, you can click either of the three
areas in the "*Scenario areas*" list, and you will enter that specific
area, where you can afterwards go to the *Pressures* tab and make other
changes, but just to that area and not for all three. Each scenario may
apply the same general changes that were set for the original scenario,
as well as specific changes, if any. Let us say that in Mayotte, we want
to increase *Algae farming* by 10%. Remember to tick the *Override group
setting* to make sure this change is only for Mayotte. There is also an
option here to RESET and remove the changes made in this specific area
of the whole scenario.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image90.png" width="183" height="367"><img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image91.png" width="186" height="217"><img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image92-ccde7ef35.png" width="605" height="219">

As stated in the beginning of this chapter, you may set separate
sensitivity matrices to different areas within the same scenario, seen
in the figure to the right.

Returning to the *Scenario* tab, a table overview of your changes can be
seen by clicking the *Show an overview of all changes* button. This
table view the general, so-called *Global changes* for all areas, and
the individual ones. See figure below.

<img alt="A screenshot of a survey Description automatically generated" src="/assets/support/en/media/image93.png" width="374" height="194">

When all settings you wish to apply are done, you can run the analysis
for the whole scenario, which includes all areas and you will get a
report of the scenario.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image94.png" width="605" height="417">

### 5.16 Batch analysis

This function enables multiple analyses to be conducted at the same time
and also for using *Split calculation* in different areas.

Start by selecting a few polygons that you want to include in your
analysis using Ctrl + click. Then go to Scenarios Tab and click + sign.
You can activate the batch analysis by clicking on *Multiple area
action*.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image95.JPG" width="697" height="336">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image96.JPG" width="697" height="308">

Then there will be a dialog box coming up, make sure to tick all the
boxes and press **CALCULATE.** After that you will see the *Completed
batch calculation* in the bottom right corner. Each report will show
each cumulative impact analysis result for each of the selected areas;
Ambodivahibe, Nosy Hara and Ankarea.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image97-c9e714031.JPG" width="688" height="388">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image98.JPG" width="688" height="335">

If you do not want to run your analysis for the whole scenario, you can
click the *Split scenario by area* button. A dialog box will pop up.
Name your batch to use for the generated scenarios and tick the boxes
you wish to apply. The first one applies changes made for all areas
within the scenario. The second applies the specific area changes made
to their corresponding scenarios. The third lets you enter the batch
mode, which will be described in chapter **5.15**. Click OK. If the
third box is left unchecked, you will come back to the *Scenario* tab
and may *Calculate* your scenario. However, if checked, you will enter
the batch mode, as described.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image97.JPG" width="681" height="326">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image99.JPG" width="681" height="333">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image100.JPG" width="696" height="336">

The scenario list view offers a batch mode, allowing multiple scenarios
to be queued for sequential calculation. The idea behind it is that you
can generate multiple scenarios with common and/or individual settings
in one batch. By entering the batch mode by clicking enter batch mode,
you will get one report for each area within the same scenario, seen in
the figure below down to the right. Press the play
<img alt="" src="/assets/support/en/media/image101-ca8746cda.png" width="9" height="13"> button to run the batch analysis. The
batch mode is also available directly when moving into the *Scenarios*
tab. From here, you can make a batch analysis of previous scenarios that
are in your scenario list. Press the *enter batch mode* button again to
exit it.

## 6. Further analyses

### 6.1 MINISYM -- analysing individual pressures

Using the same principles as when analysing cumulative impact (chapter
**5.8**), it can sometimes be useful to focus on a single sector or
pressure. These "one-over-many" analyses gives an understanding of the
combined impact of that specific human activity alone.

Such focused analysis on only one sector or pressure is labelled as
MINISYM.

Select **one or several boundary polygons** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to the *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go back to the *Pressures* tab
<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Deselect all <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> select **only one or a few associated
pressures** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Go to *Ecosystem Components* and select
**all relevant ecosystem components** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Go to *Scenarios* tab and click
**CALCULATE,** which will generate an analysis as described in chapter
**5.8** and **5.9**.

Mind that you may have to open the pressure categories (sectors) to
untick the underlying pressures, even if the category appears already
unticked.

<img alt="" src="/assets/support/en/media/image102.JPG" width="683" height="330">

<img alt="" src="/assets/support/en/media/image103.JPG" width="605" height="293">

<img alt="A map of the ocean Description automatically generated" src="/assets/support/en/media/image104.JPG" width="605" height="293">

<img alt="" src="/assets/support/en/media/image105.JPG" width="605" height="291">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image106.JPG" width="605" height="295">

<img alt="A screenshot of a graph Description automatically generated" src="/assets/support/en/media/image107.JPG" width="605" height="507">

<img alt="" src="/assets/support/en/media/image108.png" width="297" height="228">

This example of a MINISYM analysis for
shipping pressures around the Mascarene Islands, including Mauritius,
Réunion and Rodrigues, included only taxa and no habitats. The result
indicates that the shipping industry predominantly affects *Dolphins*
and *Toothed whales*, but also *Sea turtles*, *Pelagic fish* and *Baleen
whales* to some extent. Whether the impact is strong enough for action
to be taken, it cannot be concluded by this analysis alone, since the
impact score is a relative index. Deeper analysis into pressure levels
and sensitivity scores can help: 6.1 MINISYM -- analysing individual
ecosystem components.

In a similar way as above (chapter **6.1**) it can be relevant to
analyse how all pressures combined affect a single ecosystem component.
With this "one-over-many" analyses, you get a screening of the major
threats to a specific habitat or taxa of interest in your area.

Select your **boundary polygon** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to the *Scenario* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go back to the *Ecosystem components*
tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Deselect all <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> select only **one or a few associated
ecosystem components** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Go to *Pressures* and select **all
relevant pressures** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Go back to *Scenarios* and click
**CALCULATE** which will generate an analysis as described in chapter
**5.8** and **5.9**.

<img alt="A screenshot of a computer screen Description automatically generated" src="/assets/support/en/media/image109-ca80cda96.JPG" width="618" height="290">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image110.JPG" width="624" height="299">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image111.JPG" width="605" height="288">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image112.JPG" width="605" height="298">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image113.JPG" width="605" height="296">

<img alt="A screenshot of a graph Description automatically generated" src="/assets/support/en/media/image114-ca92a9420.JPG" width="605" height="457">

This example of MINISYM shows results for *Coral reef* of Menai Bay on
Zanzibar and indicates that this important habitat is most affected by
*Ocean acidification, Sea level rise\
and Artisanal fishing.*

### 6.2 Rarity-adjusted cumulative impact

*Rarity-adjusted cumulative impact* considers how rare or common the
ecosystem components are. In contrast, ordinary cumulative impact often
highlights results dominated by common ecosystem components, which make
sense because these involve more organisms being affected. However, from
an ecological perspective, it can be more meaningful to assess **how
much is lost in relation to how much remains**. This approach focuses on
the impact per remaining habitat or population.

In WIO Symphony, the *Rarity-adjusted cumulative impact* algorithm
calculates the impact for each ecosystem component then divides the
total impact by the ecosystem component's total coverage. This results
in much lower impact scores compared to ordinary cumulative impact
scores, which often reach into the thousands. Therefore, the two type of
ordinary- and rarity-adjusted impact scores, cannot be directly compared
by numbers. However, their relative differences are comparable, and both
methods provide valuable information for management\
and planning.

To begin the comparison, start with calculating an ordinary cumulative
impact assessment. Select your **boundary polygon** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to **Scenarios** tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press the **plus**
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> button <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **rename** your scenario with prefix
"**Ordinary**", select Cumulative impact algorithm <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **CALCULATE**.

<img alt="" src="/assets/support/en/media/image115.JPG" width="605" height="290">

<img alt="A screenshot of a graph Description automatically generated" src="/assets/support/en/media/image116.JPG" width="602" height="453">

Select the same **boundary polygon** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press the **plus**
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> button <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **rename** your scenario with prefix
"**Rarity**" <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **choose the algorithm**
*Rarity-adjusted cumulative impact* <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **CALCULATE**. When enabling the
*Rarity-adjusted cumulative impact*, you get an option to choose between
two alternatives under *Calculate rarity indices based on*. *Data grid
extent* calculates rarity based on the *Whole grid*, and *Calculated
area extent* is based on the\
scenario area.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image117.JPG" width="605" height="293">

<img alt="A graph of different colored bars Description automatically generated with medium confidence" src="/assets/support/en/media/image118.JPG" width="607" height="452">

Comparing the two analyses, you can see several differences. For
instance, the colour map is more confined with high impact in coastal
stretches and all of the top-five impacted ecosystem components are
coastal (including the new *Shore*, *Seagrass bed*, *and Mangroves*)
when *Rarity-adjusted cumulative impact* is applied. Interestingly,
coral reef and shallow hard remains in the top-five impacted ecosystems,
regardless of which algorithm that was used.

### 6.3 Screen for Suitable Locations for new activities

WIO Symphony can be used for overview assessment (screening) of suitable
locations for new activities. Such analyses can be quite informative for
early stages of MSP or other development plans.

The principle is to add pressure scores to each pixel in the area of
investigation, by using the *Constant* field (see chapter **5.11**,
bullet point 4). When analysing this added pressure in isolation
(removing all other pressures), the resulting colour map will give
indications of areas with high and low cumulative impact, where areas of
low impact would be more suitable locations for the activity. For
example, search for the most suitable locations for coastal seabed
mining in an area of your choice.

Select or draw a **boundary polygon** representing the area in which the
new activity could be located <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press the **plus**
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> button <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> move to the *Pressures* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **deselect all pressures** except
**Seabed mining** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> click on the **adjustment symbol** for
this pressure layer and type value 50 in the *Constant* field
<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go back to *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **rename** your scenario with prefix
"**Seabed mining**" <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **CALCULATE**.

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image119.JPG" width="605" height="292">

<img alt="A screenshot of a cartoon Description automatically generated" src="/assets/support/en/media/image120.JPG" width="685" height="319">

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image121.JPG" width="687" height="332">

It does not matter how much pressure you add in the *Constant* field as
long as you have no other pressures involved and you use the colour
scale with default settings. However, for reference, a value of 50 means
that mining with an intensity half of maximum takes place in every pixel
(that is, 50% of the area in every 1 km^2^ pixel is subjected to direct
harvest of sand or other minerals).

<img alt="A screenshot of a map Description automatically generated" src="/assets/support/en/media/image121.JPG" width="620" height="299">

The resulting colour map indicate that greener areas are more suitable
for seabed mining, from an environmental viewpoint. Yellow toward green
areas would mean substantially lower combined impact compared to dark
orange to red areas. According to the colour legend, yellow is 30% of
maximum, while dark orange is three times worse with around 90% of
maximum.

These results obviously need to be confirmed with other studies before
decision making, and it must be stressed that physical, economical, and
social aspects are not involved here. Still, this screening can be
highly efficient and save lots of resources in directing the search for
locations into certain, more promising areas, with regards to the
environment.

<img alt="A screenshot of a graph Description automatically generated" src="/assets/support/en/media/image122.JPG" width="525" height="410">

<img alt="" src="/assets/support/en/media/image123.JPG" width="637" height="603">

The *Calculation Report* with the Sankey diagram and table may provide a
first idea of expected impacts. But keep in mind that this result is for
the whole area, whilst not only in the most suitable parts of the area.
Additional analyses can be computed for the suitable locations, to learn
more.

### 6.4 Choose and Edit Matrix

The default matrix is the standard. However, there is an option to
choose between different preloaded matrices; *Revised*, *Original*, or
*Exponential*. When pressing the **Scenario area**, you can click the
**Alternative matrix** button and choose between the three different
ones. Hence, in a scenario with several areas, you can apply different
matrices to each area within the same scenario.

Some scenario simulations in MSP can be quite detailed. Perhaps the
marine plan proposes to permit continued fishing, but with mandatory
by-catch reducing measures. Then, the specific fishing pressure would
not be altered or removed, as it is still endorsed and perhaps even
increased in intensity. Regulatory changes, or general technical
development, can instead be simulated by changing the sensitivity
scores. In this case, the sensitivity between, say, artisanal fishing
and by-catch ecosystem components such as turtles, rays, sharks,
dolphins, and sea birds would be reduced. Perhaps, you may reduce
sensitivity with 50% if mitigation expects to be 50% effective.

**Select** your **area** of interest <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> go to *Scenarios* tab <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press the **plus**
<img alt="" src="/assets/support/en/media/image22-ce70fac16.png" width="8" height="8"> button <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press on the **Scenario area**
(*Chagos*) <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> Scroll down and select *User-defined
matrix* <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> select which matrix you wish to edit by
clicking the arrow
<img alt="" src="/assets/support/en/media/image65-ccebc2cf6.png" width="15" height="12"> button <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **EDIT MATRIX**.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image124.JPG" width="678" height="314">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image125.JPG" width="605" height="286">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image126.png" width="205" height="126"><img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image127.JPG" width="605" height="294">

In the matrix, first select the *Revised Matrix 2023* <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> click Edit matrix <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> rename your adjust matrix for example
*MSP Revised Matrix 202*4<img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **adjust the sensitivities**
**according** **to the measures you are simulating** (reduce the
pressure of Temperature rise to 0.5 for *Photic pelagic* (0.6 to 0.5),
*Upwelling pelagic* (0.6 to 0.5). Ocean acidification for Cold coral
reef (0.4 to 0.8) by editing the numbers) <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> **SAVE AS NEW MATRIX** <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> click Close. Back in the *Scenarios*
tab, choose your **new matrix** "*MSP Revised Matrix 2024*" <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> you may **rename** your scenario with
Test new matrix <img alt="Linjepil: rak med hel fyllning" src="/assets/support/en/media/image21.svg" width="11" height="11"> press **CALCULATE**.

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image128.JPG" width="605" height="291">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image129.JPG" width="605" height="258">

<img alt="A screenshot of a computer Description automatically generated" src="/assets/support/en/media/image130.JPG" width="605" height="291">

Note that you can only save or delete your matrix once you have saved an
original matrix as a new one. Changing sensitivity matrix manually can
also be relevant when new scientific information of environmental impact
appears and you wish to update the sensitivity\
score accordingly.

## 7. Updating and new data

WIO Symphony updates to data layers will always be needed. The Nairobi
Convention Secretariat is responsible to lead this work, although the
scientific work will be undertaken by partners and end-users on their
request.

Users or scientists willing to provide new data or models, or willing to
review and comment, are encouraged to contact the Secretariat for
further directions.

The software tool will be updated by the Secretariat when new versions
are available on the GitHub repository. These upgrades may be provided
by the parallel Swedish development of Symphony, and by other users of
the software who shares new functionalities by uploading a new fork to
the repository.

Only through continuous efforts of management and upgrades, the WIO
Symphony tool will stay relevant for its users.

**Contact us**

Web:
[www.nairobiconvention.org/wio-symphony](http://www.nairobiconvention.org/wio-symphony)

Email: <wiosym@nairobiconvention.org>.

## 8. References

Andersen, J., Al-Hamdani, Z., Harvey, E., Kallenbach, E., Murray, C.,
Stock, A., 2020. Relative impacts of multiple human stressors in
estuaries and coastal waters in the North Sea - Baltic Sea transition
zone. Sci. Total Environ. 704, 135316. [https://doi.org/10.1016/J
SCITOTENV.2019.135316](https://doi.org/10.1016/J%20SCITOTENV.2019.135316).

Bange, H. W., Bathmann, U., Behrens, J., Dahlke, F., Ebinghaus, R.,
Ekau, W., \... & Ziemek, H. P. (2017). *World Ocean Review 2015: living
with the oceans 5. Coasts-a vital habitat under pressure*. maribus.

Depellegrin, D., Menegon, S., Farella, G., Ghezzo, M., Gissi, E.,
Sarretta, A., Venier, C., Barbanti, A., 2017. Multi-objective spatial
tools to inform maritime spatial planning in the Adriatic Sea. Sci.
Total Environ. 609, 1627--1639. <https://doi.org/10.1016/J>
SCITOTENV.2017.07.264.

European Commission. 1999. Integrating environment concerns into
development and economic cooperation. Draft version 1.0. Brussels.

Fernandes, M. da L., Esteves, T.C., Oliveira, E.R., Alves, F.L., 2017.
How does the cumulative impacts approach support maritime spatial
planning? Ecol. Indic. 73, 189--202.
<https://doi.org/10.1016/j.ecolind.2016.09.014>

Halpern, B. S., Walbridge, S., Selkoe, K. A., Kappel, C. V., Micheli,
F., d\'Agrosa, C., \... & Watson, R. (2008). A global map of human
impact on marine ecosystems. *science*, *319*(5865), 948-952.

Hammar, L., Molander, S., Pålsson, J., Schmidtbauer Crona, J., Carneiro,
G., Johansson, T., Hume, D., Kågesten, G., Mattsson, D., Törnqvist, O.,
Zillén, L., Mattsson, M., Bergström, U., Perry, D., Caldow, C., &
Andersen, J., 2020. Cumulative impact assessment for ecosystem-based
marine spatial planning. Science of The Total Environment, 734, 139024.

HELCOM, 2018. State of the Baltic Sea -- second HELCOM holistic
assessment 2011-2016. Balt. Sea Environ. Proc. 155, 155.

Korpinen, S., & Andersen, J. H. (2016). A global review of cumulative
pressure and impact assessments in marine environments. *Frontiers in
Marine Science*, *3*, 153.

Spalding *et al*. 2007. Marine Ecoregions of the World: A
Bioregionalization of Coastal and Shelf Areas. BioScience 57(7):
573-583. Available: <https://doi.org/10.1641/B570707>

UNEP-WCMC (2023). Protected Area Profile for Africa from the World
Database on Protected Areas, November 2023. Available
at: [www.protectedplanet.net](https://www.protectedplanet.net/)

***\
About SwAM***

*SwAM is the Swedish Agency for Marine and Water Management. We work on
behalf of the Swedish parliament and government.*

*Together with our partners, we strengthen the capacity to plan the
future of the ocean, to take care of the ocean and to use the ocean --
for the joy and benefit*\
*of all.*

*Get our results at
[www.havochvatten.se/swam-ocean](http://www.havochvatten.se/swam-ocean)*.

<img alt="Sweden logo and Swedish Agency for Marine and Water Management logo" src="/assets/support/en/media/image4.png" width="230" height="48">

Financed by the Government Offices of Sweden and Sida, the Swedish
International Development Cooperation Agency. The contents does not
necessarily reflect the opinion of either.
