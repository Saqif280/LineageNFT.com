module.exports = `
<!-- Output copied to clipboard! -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.585 seconds.


Using this HTML file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β31
* Thu Nov 25 2021 13:58:37 GMT-0800 (PST)
* Source doc: Technical Explainer
* Tables are currently converted to HTML tables.
----->


<h2>White Paper</h2>


<h3 id="motivation-concept">Motivation + Concept</h3>


<p>
NFTs are programmable assets. Months ago we saw the NFT space and wondered why so many projects were just a picture attached to a token, and at best offered small on-chain interactions more for novelty’s sake than anything else. Since then exciting projects have begun to release, but there is still so much more that can be done with this new medium. In Lineage, each NFT is a family crest. That family crest is connected to every other crest of the same race, either as an ancestor, or as a descendant, and changes that happen to one NFT will trickle down and affect that NFT’s descendants.<br><br>This project is unique because it pushes the boundaries of what NFT art is - Lineage is interactive and the decisions of one person change the NFTs of others; a community developed collection.
</p>
<h3 id="all-about-crests">All about crests.</h3>


<p>
Before we talk about the system, and how things fit together, let’s talk about the crest(s) you’ll own if you decide to take part in the project.
</p>
<p>
Every crest in lineage has 3 pieces of underlying data that are kept on-chain. The data is primarily used to dictate the art piece displayed in your wallet, but it also allows the system to induce changes in other crests. More will be explained in the section <a href="#lineage’s-three-chapters">Lineage’s Three Chapters</a>.<br><br>These 3 pieces of underlying data are your race, your attributes, and your modifiers. 
</p>
<h4 id="your-race">Your Race:</h4>


<p>
This is the simplest of our data. This will almost <em>never</em> change for anyone that partakes in Lineage. Your race is represented on your NFT as a simple string, like “Bone Prophet” or “2 Soul Owl”, will be displayed as the centerpiece of your crest via a symbol or face reminiscent of your race, and will give you access to the discord channels exclusive to your family. 
</p>
<h4 id="your-attributes">Your Attributes:</h4>


<p>
Each crest has all 10 (maybe more, subject to change) of the attributes below. Each of these attributes is represented via a number from 0 to 255.
</p>
<ul>

<li>Chaotic / Lawful

<li>Greed / Generosity

<li>Cowardice / Bravery

<li>Pride / Humility

<li>Lucky / Unlucky

<li>Aggressive / Docile

<li>Wealthy / Poor

<li>Strong / Weak

<li>Charismatic / Repulsive

<li>Intelligence / Stupidity
</li>
</ul>
<p>
Each attribute conceptually represents a spectrum between two extremes. Extremes on either end are considered self-harmful. For example, in the spectrum of Pride and Humility, neither being proud nor having humility is ever really a bad thing. But when taken to extremes, you end up with superiority and inferiority complexes.
</p>
<p>
Like the family, these attributes will have an affect on the actual art piece in your wallet. They’ll also be used to determine which modifiers you might receive throughout the entirety of the Lineage project, both during the mint and storytelling phases. We’ll get to exactly how in later sections.
</p>
<h4 id="your-modifiers">Your Modifiers:</h4>


<p>
Modifiers are our way of telling cross-generational stories and enabling each generation to make decisions that can trickle down to affect their furthest ancestors.
</p>
<p>
Each modifier is represented by a simple string that might look like “Received Bagatu’s Curse” or “Discovered a mysterious skull at the bottom of a lake”, and your crest maintains a live list of all modifiers embedded directly into your NFT’s data. For example, it might look like: 
</p>



<pre class="prettyprint">["Received Bagatu's Curse", "Found a skull at the bottom of a lake"]</pre>


<p>
Modifiers come from 3 different places: you will have brand new modifiers added to your crest during the mint phase, you will be able to add new modifiers to your crest by “telling your story” in phase 2 of the project, and you inherit many modifiers based on which crest is your parent.<br><br>We’ve devised a straightforward but flexible system that allows a parent’s modifiers to affect their child in more ways than just passing that modifier down to the child.
</p>
<p>
But how does a modifier ripple down to affect your descendants? The answer is that every modifier has <em>other</em> corresponding modifiers that will be applied to descendants when certain constraints are filled. These rules that determine how modifiers trickle down are all functions (if you don’t know what this is, google it). What’s important is each function knows all the child’s stats, and also has context to access additional information, such as the parent’s modifiers, whether this crest is the first child of the parent, or what the current generation is.
</p>
<p>
The function then uses this information to decide, based on the descendant crest, what modifier the descendant should receive.
</p>
<p>
Heads up - we’re electing to use less technical language to help the more motivated people reading this follow along. If you’re sufficiently technical we’re sure you’ll know what our implementation is.
</p>
<p>
We define modifiers as one way relationships like this:
</p>



<pre class="prettyprint">"Modifier Of Parent": (...) => "Code that runs to select the child modifier"</pre>


<p>
Let’s see some examples of this system in action.
</p>
<p>
Here’s how we might have one crest and all its descendants be werewolves. 
</p>



<pre class="prettyprint">"Became a werewolf": (...) => "Born a werewolf"
"Born a werewolf": (...) => "Born a werewolf"</pre>


<p>
If these modifier relationships are defined below, if we turned one crest into a werewolf by assigning it the “Became a werewolf” modifier, that crest’s direct descendants will immediately receive the “Born a werewolf” modifier because of our first modifier relationship, “Became a werewolf”: () => “Born a werewolf”. Then, because of our second modifier relationship, “Born a werewolf”: () => “Born a werewolf”, each of those direct descendants would look to <em>their</em> direct descendants, who would receive the “Born a werewolf” modifier. This would of course repeat, all the way down to the very bottom of our family tree. This allows us to turn a single crest into a werewolf, and create an entire subfamily into werewolves.
</p>
<p>
Let’s go for another example: let’s see how we might create a curse that skips generations:
</p>



<pre class="prettyprint">"Curse of the Plaguehand": (...) => "Exempt from Curse of the Plaguehand"
"Exempt from Curse of the Plaguehand": (...) => "Curse of the Plaguehand"</pre>


<p>
With this, all crests with “Curse of the Plaguehand” will make their children “Exempt from Curse of the Plaguehand”, but all the crests that are exempt will give that curse right back to their children, and we end up with a curse that gets passed from grandparent to grandchild.
</p>
<p>
	
</p>
<p>
A third, more complicated example, is an example of how we might create a common first-born line of royalty that can only apply to specific races. This is going to look more “codelike” than the two above, so if you have trouble understanding, please drop in on our discord and ask for more details!
</p>



<pre class="prettyprint">"Is royal line": ({ parentContext, childContext }) => {
  if (parentContext.isFirstChild(childContext.id) and 
    childContext.race == "Human" ||  childContext.race == "Dwarf" 
  ) {
    "Is royal line"
  } else {
    none
  }
}</pre>


<p>
There are further technical considerations to cover edge cases with this system. We think what you’ve just read is enough to get a good understanding of what’s going on behind the hood. If you’re interested in reading more details see <a href="#even-technical-er-information">Inheritance System Edge Cases + Considerations</a>.
</p>
<h3 id="lineage’s-three-chapters">Lineage’s Three Chapters</h3>


<p>
Lineage has three Chapters to the project, and it’s easiest to understand the system by understanding what is going to happen on mint day, and what will happen for the 6 months after.
</p>
<h4 id="chapter-1-building-the-family-trees-mint-day">Chapter 1: Building The Family Trees (Mint Day)</h4>


<p>
On mint day (?) crests will be minted from our contract.  The team has reserved the first crest of each family - the genesis crests - as crests to hold onto for historical significance and either gift to famous authors, auction off for charity, or ultimately donate to our DAO for collective ownership. We plan for most of these 8 genesis crests to be owned by the community.
</p>
<p>
As people execute our contract function to mint their crest, we…
</p>
<ol>

<li>Select a crest from the previous generation to be the newly minted crest’s parent

<li>Assign this new crest the parent’s <a href="#your-attributes">attributes</a> and add a small amount of genetic drift

<li>Using our modifier system mentioned in <a href="#your-modifiers">Your Modifiers</a>, assign our new crest modifiers based on the parent

<li>Generate an additional (?) modifiers for the new crest
</li>
</ol>
<p>
Once all (?) crests are minted, there will be a month-long gap (that we plan to fill with events, irl gifts to all token holders, and more) as we prepare and develop for chapter 2 of Lineage - the exciting part.
</p>
<h4 id="chapter-2-telling-the-story">Chapter 2: Telling the Story</h4>


<p>
This covers the best part of Lineage, and why we’re so excited to share it with you.
</p>
<p>
For the first (?) months after the mint we are collectively telling the story of the world through our choices. How? In Chapter 2 of Lineage we publish a new “Moment” every (?). The guaranteed outcome of participating in any event is receiving a new modifier for your crest (though <em>which</em> modifier is another story). New modifiers will almost always mean new art for your NFT. Based on your decisions the modifiers could be rare. Because our modifiers will ripple effect out and affect our descendants forever, over the course of the (?) months there will be plenty of changes and new additions to your crest. Once the (?) months are over, we close our chapter of storytelling and lock the crests, preventing them from changing further. 
</p>
<p>
We hope for Moments to help keep Lineage decentralized, emphasizing and rewarding the token holders who have small crest counts. Rarity of your crest will be a result of the actions you take during each Moment. It’s going to be frustrating to run through the same interaction for all 50 of your crests each week, and hopefully this will incentivise a wide distribution of crests. Some bonus Moments may also be participation capped to only 1000, or a few hundred crest owners. Our goal is for ownership of the lore and history to be decentralized, and reward those who are most engaged and active in our community. We <em>do</em> understand that making the project work for whales and those who want to own many, many crests still matters though, so there will be plenty of rarity for those who want to just buy and hold after mint.
</p>
<p>
<br>For each Moment, crest holders will come to our website and be presented with an experience. This experience can be as simple as selecting one of three potions to drink, or as complicated as a dungeon requiring multiple separate token holders signing on to be members of a party that rewards the most successful dungeoneers with freshly minted NFTs. 
</p>
<p>
Originally, we had planned to write our entire inheritance system and event systems on-chain. Practically speaking, that’s more difficult for us as developers, more gas you’ll have to burn, and Chapter 2 is heavily centralized around the Lineage Team anyway. Instead we’re planning on running the logic on our servers, and storing only the outcome of the logic, such as changes to attributes or modifiers, on-chain. And of course updating your NFT’s assets accordingly. Yes this is heavily centralized… but if you haven’t noticed, every project is centralized around the core team when it comes out, whether the team is willing to admit it or not. So trust us that this is going to be as exciting as it sounds! If you’re worried about team integrity let us know and we’ll happily consider putting most of the system logic on-chain. 
</p>
<h4 id="chapter-3-community-and-fun-stuff">Chapter 3: Community and Fun Stuff!</h4>


<p>
We haven’t decided on all the cool stuff we’re gonna do. 
</p>
<h4 id="chapter-4-[worldname]-lives-on">Chapter 4: [worldname] Lives On</h4>


<p>
We’re looking at potential projects that could be follow ups to Lineage in the world of [worldname]. These include things like paying authors to create short stories that the community can vote on turning into canon lore, doing a series of PFPs for each of our races, and the obligatory “building into the metaverse” consideration. 
</p>
<p>
For legal reasons, there are no plans at the moment to tie these tokens to anything that will lead back to profits.
</p>
<h3 id="summary">Summary</h3>


<p>
Lineage is cool because NFTs can change each other. Lineage is cool because you get to make decisions and interact in ways that change your NFT. Lineage is cool because your NFT is very directly tied into our world and lore.
</p>
<p>
If you have questions, hop in our discord. Thanks for reading!
</p>
<p>

</p>
<h3 id="even-technical-er-information">Even Technical-er Information</h3>


<h4 id="inheritance-system-edge-cases-considerations">Inheritance System Edge Cases + Considerations</h4>


<h5 id="modifier-invalidation-cleanup">Modifier Invalidation + Cleanup</h5>


<p>
There are some cases where one modifier can be invalidated by another. Think an ancestor receives “Became a werewolf” and you find some strange cure. Our system will have already made all the descendants of that crest into werewolves! Even if you find the cure, we’ve already set the “Born a werewolf” modifier on you and all your descendants. For this reason we need to know how to do cleanup on the family hierarchy when required.
</p>
<p>
In this case, let’s imagine a series of crests, A -> B -> C<br><br>A “Became a werewolf” so B and then C are “Born a werewolf”. In B’s lifetime, she discovers the cure, and receives the modifier “Discovered werewolf cure”. At this point, C never should have been born a werewolf. We need to remove that modifier from its list. <br><br>We solve this problem by<br>1. Any time we add a new modifier to our crest, checking our mapping that knows how to do tree cleanup for us. <br>2. If we see a corresponding function defined for the modifier, like it is below, we then run the function on every child crest until we reach the bottom of the tree.
</p>
<p>
3. We continue calling this function recursively down the tree until it returns false or until we hit leaf nodes.
</p>



<pre class="prettyprint">"Discovered werewolf cure": ({ crestContext }) => {
  if (childContext.modifiers.includes("Born a werewolf")) {
    // delete the "Born a werewolf" modifier from this crest
    // continue calling this function, because this crest was a werewolf, so the child is too.
  } else {
  // Stop repeatedly calling this function, because this crest was not a werewolf, so it's child won't be one either. 
  }
}</pre>


<h5 id="modifier-priorities-for-asset-rendering">Modifier Priorities For Asset Rendering</h5>


<p>
Each crest’s art will be based on the backing set of modifiers that crest has received. However, not all modifiers will end up being visualized in the crest - you’ll simply have too many after receiving them through moments, inheritance, and the minting process. 
</p>
<p>
We have to decide how, out of your maybe dozen modifiers, which ones get rendered and included as parts of your crest. Sometimes simple is best; we’re assigning every modifier a numeric “priority”. When deciding what to display as part of your crest, we look at all your modifiers, and pick the highest priority modifier for each of the predefined components that make up the crest (the top, bottom, backing plate, and family marker). If you receive new modifiers with higher priorities your crest will change, and if you receive modifiers that correspond to a new category of component, your crest will earn a new layer and grow more detailed.
</p>
<h4 id="improving-the-experience-of-dynamic-nfts">Improving the experience of Dynamic NFTs</h4>


<p>
NFTs that change frequently aren’t just tricky because you have to write more on-chain code. They also suffer from issues like how to use immutable storage without it being cost prohibitive, and how to work around NFT marketplaces that are always caching the NFT, and perpetually displaying the wrong image.
</p>
<h5 id="displaying-crest-changes">Displaying Crest Changes</h5>


<p>
As you’ve probably experienced, NFT marketplaces usually cache the NFT artwork. On newly minted NFTs once developers make the switch from placeholder assets to the real assets, NFT holders have to go to marketplaces, click a button to trigger a cache update, and wait to see their NFT. For projects where the NFT image can be updated many times, this is a huge annoyance because the time when a holder will <em>most</em> want to see their changed NFT is right after it changes. 
</p>
<p>
We’ll have a simple tool that displays all the crests in your wallet, and is always insync with the on-chain status of your crest, even if your crest was updated seconds ago.
</p>
<h5 id="decentralized-storage">Decentralized Storage</h5>


<p>
Images stored on IPFS are just decentralized, not permanent. The second someone stops paying the IPFS pinning service it’s monthly fee, the data might just go poof. Arweave is theoretically a much more permanent solution - though its not fully proven. The tradeoff with Arweave is that any storage paid for is permanent. That means if your crest changes 15 times over the course of time, we’re paying to upload and permanently save all 15 images. Arweave is expensive and for 10,000 crests this would eat into the funds we want to spend growing the project.<br><br>Instead, we plan to keep all crest assets on IPFS during the months they’re in flux, pinning the newly uploaded assets, setting the URIs on the tokens, and unpinning the out of date assets. Once the crests lock, and everyone’s crests are no longer subject to change, we will upload the final assets to Arweave and reference the Arweave URI in the token for permanence.
</p>
<h3 id="glossary">Glossary</h3>


<p>
<strong>Ancestor</strong>: A relation between two crests. One crest is an ancestor of another if we start at the other crest and can reach the ‘ancestor’ crest by traveling only from child crest => parent crest.
</p>
<p>
<strong>Descendant</strong>: A relation between two crests. One crest is a descendant of another if we start at the other crest and can reach the ‘descendant’ crest by traveling only from parent crest =>child crest.  
</p>
<p>
<strong>Direct Descendant</strong>: A crest’s immediate child, aka the child in a parent - child relationship.
</p>
<p>
<strong>Crest</strong>: A single instance of the NFT. Crests have one parent and anywhere from 0 to 2 children. 
</p>
<p>
<strong>Moment</strong>: An event that we hold by publishing something interactive on our website. Imagine it like a popup shop - it’s something fun but available for only a short period of time. The outcome of your interaction leads to data getting written back to your NFT on-chain.
</p>
`;