export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "lightweight-flanges-vs-cast-iron-when-to-make-the-switch",
    title: "Lightweight Flanges vs Cast Iron: When to Make the Switch",
    excerpt:
      "Class 125LW steel flanges drop into a Class 125 cast iron bolt pattern, but they fix several problems cast iron creates. Here is when the switch makes economic and engineering sense.",
    date: "2026-01-15",
    category: "Waterworks",
    readTime: "9 min read",
    sections: [
      {
        paragraphs: [
          "Cast iron flanges have been holding water and low-pressure utility systems together since well before any of us were drawing isometrics. They are still in service across thousands of municipal water plants, fire protection mains, HVAC chiller plants, and older pump stations. They work, until they do not. And when a cast iron flange stops working, it usually fails in the unhelpful, dramatic way that brittle materials tend to fail.",
          "Class 125LW steel flanges exist precisely because the industry needed something that would mate to the legacy cast iron bolt pattern without forcing a wholesale piping redesign. They are not a marketing rebrand of cast iron. They are a different material doing the same dimensional job, and the difference matters more than most procurement specs let on.",
        ],
      },
      {
        heading: "Where Cast Iron Flanges Still Live",
        paragraphs: [
          "ANSI B16.1 Class 125 cast iron flanges are scattered through every piece of infrastructure that predates roughly 1990, and plenty that came after. Municipal water utilities standardized on them because cast iron is cheap, the foundries were everywhere, and the service was forgiving. Low-pressure cold water at 150 to 175 psi does not punish a cast iron flange the way steam or process service does.",
          "Today you find Class 125 cast iron in raw water intakes, finished water transmission, fire water headers, condenser water for large chillers, and the discharge side of low-head centrifugal pumps. Some specifications still call it out by default, mostly because the spec was written in 1978 and never revisited.",
          "The dimensional standard is solid. The bolt circle, outside diameter, bolt hole count, and bolt hole size for a given nominal pipe size and class have not changed. That stability is exactly what makes the lightweight steel alternative possible: anything that matches B16.1 dimensions can mate to an existing cast iron flange without an adapter.",
        ],
      },
      {
        heading: "The Problems Cast Iron Creates",
        paragraphs: [
          "Brittleness is the headline issue. Gray cast iron has essentially zero ductility. When it fails, it fragments. A flange that experiences thermal shock, a water hammer event, or a hard impact during installation can crack without warning. The crack does not stop where it started; it propagates through the casting until the flange separates.",
          "Thermal cycling accelerates the problem. Cast iron has a coefficient of thermal expansion close to steel but a much lower tolerance for the resulting stresses. A flange that sees daily temperature swings, common in HVAC and process cooling loops, accumulates microcracks that you cannot see and cannot inspect with conventional NDE methods.",
          "Weight is the second issue, and it is bigger than people realize. A 24-inch Class 125 cast iron flange weighs roughly 195 pounds. A 36-inch weighs over 400 pounds. On a long pipe run with flanged valves every 200 feet, that mass loads the pipe supports, the hangers, and the underlying structure. Retrofit projects routinely discover that the existing support framing is sized for the old cast iron load and nothing else.",
          "Casting defects are the third issue. Porosity, shrinkage cavities, and cold shuts hide inside the casting wall. They pass visual inspection. They sometimes pass hydrostatic test. Then they leak six months into service when the gasket relaxes and the leak path finds the void. Cast iron also does not respond well to radiographic or ultrasonic inspection because the graphite flakes scatter the signal. You cannot reliably NDE a cast iron flange the way you can a forged or rolled steel one.",
        ],
      },
      {
        heading: "What Class 125LW Actually Is",
        paragraphs: [
          "Class 125LW, sometimes called lightweight or AWWA C207 Class B, is a fabricated steel flange built to match ANSI B16.1 Class 125 dimensions. Same outside diameter. Same bolt circle. Same number of holes. Same hole size. Same gasket surface. The mating face of a Class 125LW flange will bolt straight to a Class 125 cast iron flange or a Class 150 ANSI flange in the same size, because B16.1 Class 125 and B16.5 Class 150 share their bolt patterns.",
          "The material is the difference. Class 125LW is typically supplied in ASTM A105 carbon steel or, for the lighter wall versions, A36 plate stock. AWWA C207 covers four classes (B, D, E, and F) at increasing pressure ratings. Class B is the direct cast iron equivalent at 86 psi working pressure. Class D goes to 175 psi, which is the practical equivalent of cast iron Class 125 in most water service. Classes E and F handle higher pressures up to 300 psi.",
          "Because the flange is fabricated from steel, it is ductile. It deforms before it fails. It accepts radiographic and ultrasonic inspection. It welds. It tolerates impact. It does not fragment when something hits it.",
        ],
      },
      {
        heading: "Drop-In Compatibility: The Math",
        paragraphs: [
          "The compatibility claim is worth verifying on paper before anyone trusts it in the field. For a 12-inch flange, B16.1 Class 125 specifies a 19-inch outside diameter, a 17-inch bolt circle, twelve 1-inch bolt holes, and a flat face gasket surface. Class 125LW per AWWA C207 specifies an identical 19-inch outside diameter, identical 17-inch bolt circle, identical twelve 1-inch bolt holes, and an identical flat face.",
          "The same checks hold at 24-inch (32 inches OD, 29.5-inch BC, twenty 1-1/4 inch bolts) and at 36-inch (46 inches OD, 42.75-inch BC, thirty-two 1-1/2 inch bolts). A standard ring gasket sized for B16.1 Class 125 drops into the joint without modification. The mating valve, pump, or pipe flange does not care which side is steel and which is iron.",
          "The only thing to watch is the gasket surface finish. Cast iron flanges traditionally have a serrated or phonographic finish; AWWA C207 flanges are typically smooth or have a different serration pattern. A spiral wound gasket with an inner ring tolerates either. A flat sheet gasket may need its compression load reconsidered if the finish difference is severe, but in practice the same gasket part number works in 95% of retrofit jobs.",
        ],
      },
      {
        heading: "Weight Savings That Actually Show Up On Drawings",
        paragraphs: [
          "A 24-inch Class 125 cast iron flange comes in at about 195 pounds. The Class 125LW equivalent in AWWA C207 Class D runs around 95 to 110 pounds depending on hub thickness. That is a 45% to 50% reduction per flange. On a 36-inch flange the cast iron weighs roughly 420 pounds; the lightweight steel version drops to about 220 pounds, again roughly half.",
          "Multiply by the number of flanged connections on a typical raw water intake skid, a chiller plant manifold, or a fire protection riser, and the cumulative weight savings is measured in thousands of pounds. That changes pipe support spacing, hanger sizing, and seismic restraint calculations. On a retrofit, the lighter flange may be the only thing that lets the existing structure stay in place.",
        ],
      },
      {
        heading: "When To Keep Cast Iron",
        paragraphs: [
          "There are situations where cast iron is the right answer. Pure replacement-in-kind on a legacy system with a specification that requires it, particularly in jurisdictions where the engineer of record will not sign off on a material substitution. Buried service in cold water where the temperature never moves and the flange is bedded in soil that buffers any mechanical shock. Some fire protection codes still cite cast iron by name and require formal variance to substitute.",
          "Low-pressure, low-cycle, dimensionally critical retrofits where the existing pipe stub and gasket are seated and any change risks disturbing the joint. Sometimes the smart move is to leave the old cast iron flange alone and replace only the one across the gasket.",
        ],
      },
      {
        heading: "When To Switch",
        paragraphs: [
          "Any project with thermal cycling. HVAC chilled water and condenser water loops that see daily temperature swings. Process cooling that ramps with plant load. Steam condensate return where the temperature changes shift the flange stress.",
          "High-vibration service. Pump discharge headers, especially near positive-displacement pumps. Compressor station ancillary piping. Anywhere the flange is sitting on equipment that shakes.",
          "Weight-sensitive structures. Rooftop installations, elevated process platforms, and any retrofit where the existing supports were sized for steel pipe but cast iron valves and flanges were added later.",
          "Modern code refits. Newer editions of ASME B31.1 and B31.9 include impact and brittle fracture considerations that effectively make cast iron a no-go in any service that sees temperatures below about 32 degrees F. If the project scope is bringing an old plant up to current code, the cast iron is on the change list.",
          "Inspectable service. Any piping that has to be NDE-able for code compliance or insurance reasons needs steel. Radiographic and ultrasonic methods work on rolled and forged steel flanges. They do not work reliably on cast iron.",
        ],
      },
      {
        heading: "The Cost Picture",
        paragraphs: [
          "Per flange, Class 125LW carbon steel typically runs 30% to 60% more than cast iron at the same nominal size. That looks like a premium until you put it next to the rest of the project. Lighter flanges mean lighter supports. Lighter supports mean less structural steel. Less structural steel means lower install labor and shorter crane time. On retrofit projects, the steel flange often costs less in installed dollars because it does not require structural reinforcement of the existing rack.",
          "The other side of the cost equation is service life and reliability. A cracked cast iron flange in a fire water main is a regulatory event. The cost of one such failure dwarfs the cost premium of having specified steel up front. Plant reliability engineers do this math regularly and almost always land on steel for any service that matters.",
        ],
      },
      {
        heading: "Field Example",
        paragraphs: [
          "A water treatment plant in the Gulf region replaced a 30-inch raw water intake manifold after a cast iron flange cracked during a thermal event on the inlet. The plant had been running the intake at near-ambient water temperatures year-round, but a high-pressure cleaning cycle on the upstream strainer introduced warm water briefly into the cold manifold. The thermal shock found a casting defect that had passed every inspection for 22 years.",
          "The replacement was specified as AWWA C207 Class D lightweight steel flanges across the entire manifold, drop-in to the existing bolt pattern. The retrofit took one outage weekend instead of the projected two, because the lighter flanges did not require the rigging plan the original cast iron would have demanded. Five years later, the manifold has not had a flange issue.",
        ],
      },
      {
        heading: "Specifying The Switch",
        paragraphs: [
          "On a new specification, call out AWWA C207 Class D as a permitted alternate to ANSI B16.1 Class 125 wherever the service allows. That gives the contractor flexibility and keeps the bolt pattern compatible with any future tie-in to legacy piping.",
          "On a retrofit, document the dimensional match in the change order. The bolt circle and OD are identical, so the change does not affect any downstream piping, valves, or equipment. The gasket may need a new part number; verify the surface finish and consult the gasket vendor if the original was a hard sheet material on a serrated cast iron face.",
          "We stock Class 125LW and AWWA C207 flanges across the standard sizes and can source the larger sizes through our mill relationships. For dimensional questions, the [flange dimension calculator](/tools/flange-dimension-calculator) gives you the bolt pattern data you need to verify the match before the order goes in.",
        ],
      },
      {
        heading: "The Short Answer",
        paragraphs: [
          "If the service has any thermal cycling, vibration, impact exposure, or code-driven NDE requirements, switch. If the service is pure ambient low-pressure water in a stable bedded installation with no code pressure, cast iron is fine. The switch decision is rarely about the flange itself. It is about everything around the flange.",
          "For sourcing on Class 125LW, AWWA C207, and related waterworks flanges, see our [waterworks flange offering](/standards/awwa-flanges) or call (281) 484-8325. We carry stock in carbon steel and can quote stainless or coated versions for corrosive service.",
        ],
      },
    ],
  },
  {
    slug: "api-6a-vs-asme-b16-5-where-the-spec-actually-changes",
    title: "API 6A vs ASME B16.5: Where the Spec Actually Changes",
    excerpt:
      "On paper they share a lot. In the field they diverge fast. Here is what separates an API 6A wellhead flange from an ASME B16.5 process flange, and why specifying the wrong one is more than a paperwork problem.",
    date: "2026-02-03",
    category: "API / Oilfield",
    readTime: "11 min read",
    sections: [
      {
        paragraphs: [
          "Most people think flange selection is a catalog problem. It is actually a service-conditions problem. Nowhere is that more obvious than the line between API 6A and ASME B16.5. Both specifications cover flanges. Both list pressure classes. Both define facing types and bolt patterns. And both will sit on a procurement engineer's desk looking interchangeable until somebody runs the wrong one on the wrong side of the wellhead.",
          "The two specs were written for fundamentally different worlds. ASME B16.5 covers general industrial process piping. API 6A covers upstream oilfield wellhead and Christmas tree equipment. The materials, pressure regimes, sealing technology, and inspection regimes all diverge from there.",
        ],
      },
      {
        heading: "A Quick History",
        paragraphs: [
          "ASME B16.5 traces back to the original American Standard for steel pipe flanges, first issued in the 1920s and revised continuously since. It covers pipe flanges and flanged fittings from 1/2 inch through 24 inches in pressure classes 150, 300, 400, 600, 900, 1500, and 2500. Above 24 inches the dimensional baton passes to ASME B16.47 (Series A or MSS SP-44 lineage, and Series B or API 605 lineage). B16.5 is the spec that governs refineries, chemical plants, power plants, pipelines, and most of the process world downstream of the wellhead.",
          "API 6A grew out of the oilfield's need for a spec that addressed wellhead conditions specifically. Hydrocarbon production at the wellhead does not look like a refinery cracker outlet. Pressures are higher, temperatures more variable, sour gas more common, and the consequences of failure more public. API 6A first appeared in the 1930s, and the current edition, API Specification 6A 21st Edition (also harmonized as ISO 10423), is what governs new wellhead, Christmas tree, and surface safety valve equipment.",
        ],
      },
      {
        heading: "Pressure Class: Where The Numbers Diverge",
        paragraphs: [
          "ASME B16.5 pressure classes are named by their cold working pressure on a Group 1.1 material at room temperature, roughly. Class 150 holds 285 psi cold. Class 300 holds 740 psi. Class 600 holds 1480. Class 1500 holds 3705. Class 2500 holds 6170. Those numbers derate as temperature climbs, and the derating tables are in Annex A of the standard.",
          "API 6A pressure classes are named by their cold working pressure directly. 2K means 2,000 psi. 3K means 3,000 psi. 5K is 5,000 psi. 10K is 10,000. 15K is 15,000. And 20K is 20,000 psi. There is no derating game; the class name is the rating at the rated temperature class (which API 6A handles through temperature classifications K, L, P, R, S, T, U, V, and Y).",
          "The overlap zone is narrow. ASME Class 2500 at 6,170 psi sits between API 5K and 10K. There is no ASME class that reaches API 10K, 15K, or 20K. If the service pressure is above about 6,000 psi at room temperature, the flange is going to be API 6A whether anybody intended it that way or not.",
        ],
      },
      {
        heading: "Facing Requirements",
        paragraphs: [
          "ASME B16.5 allows multiple facing types: raised face (RF), flat face (FF), ring-type joint (RTJ), tongue and groove, and male and female. Raised face is the default for most process service. RTJ shows up at Class 900 and higher for sealing reliability at elevated temperature and pressure.",
          "API 6A is more restrictive. The 6B flange (used through 5K class) requires a ring-type joint, period. The 6BX flange (used at 10K, 15K, and 20K class) also requires a ring-type joint, but with a different ring profile. The ring gaskets are API-specified BX-series for 6BX flanges and R-series for 6B flanges, sized to specific groove dimensions. No raised face. No flat face. The seal is the metal ring, and the bolt load compresses the ring into the matching groove on the mating flange.",
          "The reason is straightforward. At wellhead pressures, an elastomeric or graphite gasket will not hold. The seal has to be metal-to-metal with a compressed soft iron or low-carbon steel ring, and the groove geometry has to be tight enough to resist blowout. RTJ rings, properly seated, will hold pressure well above the bolt load they were torqued to.",
        ],
      },
      {
        heading: "Material Requirements And PSL Levels",
        paragraphs: [
          "ASME B16.5 references material standards (A105, A350 LF2, A182 F316L, etc.) and requires the standard ASTM tests for those materials. The level of additional NDE, traceability, and impact testing is left to the project specification.",
          "API 6A adds a Product Specification Level (PSL) classification on top of the base material. PSL-1 is the baseline, roughly equivalent to standard process flange QA. PSL-2 adds tensile and impact testing requirements. PSL-3 adds 100% NDE including ultrasonic or radiographic examination of the body, plus expanded chemical analysis. PSL-4 is PSL-3 with additional production testing and tighter material qualification.",
          "On top of PSL, API 6A defines material classes (AA, BB, CC, DD, EE, FF, HH). Each class limits the allowable materials based on service environment. Class AA and BB are general service. CC limits chemistry for moderate corrosive service. DD, EE, and FF tighten further for increasingly corrosive and sour environments. HH is the most restrictive, intended for severely sour service per NACE MR0175.",
          "A B16.5 Class 600 RTJ flange in A105 is not the same article as an API 6A 5K 6B flange in AA-PSL-2, even if they happen to share dimensions in some sizes. The latter has documented impact testing, expanded NDE, and explicit chemistry controls. The former might, depending on what the buyer asked for.",
        ],
      },
      {
        heading: "NACE MR0175 And Sour Service",
        paragraphs: [
          "When hydrogen sulfide is present in the produced fluid, sulfide stress cracking becomes the dominant failure mode for high-strength steel components. NACE MR0175 (also ISO 15156) defines material restrictions to mitigate the risk.",
          "Both ASME B16.5 and API 6A flanges can be specified to NACE MR0175. The hardness limits kick in on bolting first. Standard A193 B7 studs have a hardness ceiling that already meets NACE if specified correctly, but the maximum hardness must be controlled and documented. B7M is the lower-hardness, lower-strength variant explicitly qualified for sour service. Nuts shift from 2H to 2HM for the same reason.",
          "The flange body itself, in carbon steel like A105, generally complies with NACE in the normalized condition with controlled hardness. In low alloy or stainless materials, the qualification path is more involved. API 6A material classes CC through HH are structured around increasing sour service severity, which makes the specification path cleaner when the project knows it has H2S.",
        ],
      },
      {
        heading: "Dimensional Tables",
        paragraphs: [
          "ASME B16.5 Table 11 lists dimensions for sizes 1/2 inch through 24 inches across all pressure classes. Outside diameter, bolt circle, bolt hole size, number of bolts, hub dimensions, raised face diameter and height. Everything you need to lay out the flange on a drawing.",
          "ASME B16.47 picks up from 26 inches through 60 inches. Series A (formerly MSS SP-44) and Series B (formerly API 605) are not dimensionally interchangeable. The two series have different bolt circles for the same nominal size, which has caused more than one bad surprise on a retrofit.",
          "API 6A has its own dimensional tables indexed by nominal bore and pressure class. A 4-1/16 inch bore 5K 6B flange has specific OD, BC, and bolt pattern that does not match any ASME flange. The bore size convention is also different: API 6A flanges are specified by bore through the flange, not by nominal pipe size. A 4-1/16 inch API flange does not pair with a 4 inch ASME flange. The bolt patterns will not align.",
        ],
      },
      {
        heading: "Identification And Stamping",
        paragraphs: [
          "API 6A requires permanent marking on the flange that includes manufacturer mark, API monogram (if licensed), nominal bore, pressure rating, material class, PSL level, temperature class, and the heat number. The marking is supposed to survive paint and corrosion long enough to be readable in service.",
          "BX ring grooves in 6BX flanges are also identified by number (BX-150, BX-151, etc.) that corresponds to the ring profile. Mismatching ring numbers is a leak path waiting to find pressure.",
          "ASME B16.5 marking is lighter. Manufacturer, material specification, size, class, and a few optional traceability marks. The information is enough for incoming inspection but does not embed the service qualification the way API 6A does.",
        ],
      },
      {
        heading: "The Mistakes That Happen",
        paragraphs: [
          "Specifying ASME B16.5 Class 2500 for a wellhead application instead of API 6A 5K. The pressures look similar (6,170 psi vs 5,000 psi), and procurement assumes the higher number wins. The flange will hold the pressure. It will not hold the inspection because it was not built to PSL-2 or PSL-3 traceability and material class controls. On a sour wellhead, that is a regulatory and safety problem.",
          "Assuming API 6A flanges can mate to ASME flanges with an adapter spool. Sometimes that adapter exists (called an adapter or DSA, double-studded adapter) and is a properly engineered transition with the API flange on one side and the ASME flange on the other. But you cannot just drill a custom bolt pattern in the field and call it good.",
          "Mixing R-series ring gaskets with BX grooves or BX rings with R grooves. The ring will sit in the groove but will not seat properly. Initial hydrotest may pass; service pressure will find the leak path.",
          "Carrying API 6A material class AA into mild sour service expecting it to comply with NACE. AA does not have the material restrictions for sour service. You need CC or higher with PSL-3.",
        ],
      },
      {
        heading: "When Projects Mix Both",
        paragraphs: [
          "Almost every full-stream project has both. A wellhead produces into a Christmas tree (API 6A) that pipes into a flowline (often API 5L or API 6D fittings) that runs to a separator or production manifold. The separator outlet typically transitions to ASME B16.5 piping for downstream gathering or refinery service.",
          "The transition is usually a flange spool or a manifold block that has API 6A on the wellhead side and ASME B16.5 on the process side. The spool is built to the higher of the two qualifications, with full traceability through the API portion, and the gasket and bolting are sized to the specific facing on each end.",
          "Sourcing both standards under one PO is common in oilfield projects. We stock and source API 6A 6B and 6BX flanges in 2K through 15K classes, and we cover ASME B16.5 and B16.47 across all standard pressure classes and materials. For projects that need NACE MR0175 documentation, the material certs and PSL traceability come with the flange.",
        ],
      },
      {
        heading: "Closing The Loop",
        paragraphs: [
          "The short answer to API 6A vs ASME B16.5 is that they cover different services and the choice is not really a choice. Wellhead and tree service is API 6A. Process and downstream is ASME B16.5. Where the two systems meet, the transition is an engineered spool, not a creative interpretation of dimensions.",
          "The harder answer is in the qualification details: PSL level, material class, NACE compliance, temperature class. Those have to be specified on the line item, not assumed from the pressure class name. A 5K flange without a PSL level is just metal until somebody asks for the paperwork.",
          "For specification help on API or ASME flanges, see our [API flange offerings](/standards/asme-flanges) and our [pressure and temperature rating tool](/tools/pressure-temperature-rating), or call (281) 484-8325. Material certs, PSL documentation, and NACE compliance paperwork come with the flange.",
        ],
      },
    ],
  },
  {
    slug: "the-bolt-torque-question-that-isnt-actually-about-bolts",
    title: "The Bolt Torque Question That Isn't Actually About Bolts",
    excerpt:
      "Engineers call asking what to torque a flange to. The real answer involves the gasket, the stud material, the lubricant, the temperature, and the assembly sequence. Here is how to think about it.",
    date: "2026-03-12",
    category: "Engineering",
    readTime: "10 min read",
    sections: [
      {
        paragraphs: [
          "We get calls every week that start with some version of: what torque should I use on a 6 inch Class 300 flange? The honest answer is that the question is incomplete. Bolt torque is a means to an end. The end is a leak-tight joint at operating conditions. Torque is one of the inputs that determines whether you get there, and on its own it tells you almost nothing.",
          "The right question is: how do I produce enough clamp load on the gasket to keep the joint sealed across the full range of pressures, temperatures, and cycles the joint will see, given the bolt material, the lubricant, the gasket type, and the assembly procedure? That question has an answer. It just is not a single number.",
        ],
      },
      {
        heading: "The Clamp Load Equation",
        paragraphs: [
          "The standard relationship between applied torque and resulting bolt tension is T = K * F * D, where T is torque, K is the nut factor (a dimensionless friction term), F is the bolt preload force, and D is the nominal bolt diameter. The equation is approximate, but it captures what matters.",
          "Torque is what the wrench applies. Bolt tension is what actually clamps the gasket. The K factor is the bridge between the two, and it is where most field problems live.",
          "If you rearrange to solve for F, you get F = T / (K * D). A higher K means more of your applied torque is lost to friction in the threads and under the nut face, leaving less clamp load on the joint. Cut K in half, and you double the clamp load for the same applied torque. That is not a small effect.",
        ],
      },
      {
        heading: "The K Factor",
        paragraphs: [
          "K is the nut factor, and it is essentially a friction coefficient that bundles thread friction, bearing-face friction, and a geometric term. Typical values:",
          "K = 0.20 for unlubricated, dry installation on plain carbon steel studs.",
          "K = 0.16 for studs with a basic anti-seize compound.",
          "K = 0.12 to 0.15 for studs with a high-quality lubricant like Never-Seez or molybdenum disulfide.",
          "K = 0.10 or lower for studs with specialty lubricants designed for high-temperature service.",
          "Going from K = 0.20 dry to K = 0.12 lubricated changes the bolt tension by 67% at the same applied torque. That is the difference between a joint that seats the gasket and one that does not. It is also the difference between a joint at 30% of bolt yield and one at 50% of bolt yield, which is a different problem at the other end of the curve.",
          "Lubrication needs to be applied to both the threads and the bearing surface under the nut. Just lubing the threads leaves the nut-face friction high, which throws the K calculation off and produces inconsistent results across the bolt pattern. Field practice is to apply lubricant to the stud threads, the nut threads, the nut face that bears on the washer or flange, and the washer face that bears on the flange. All four surfaces matter.",
        ],
      },
      {
        heading: "Stud Material And Yield",
        paragraphs: [
          "The torque target depends on what stress level you are trying to put the bolt at, and the stress level you can safely target depends on the bolt material.",
          "A193 Grade B7 is the workhorse stud material for general process service. Yield strength is 105,000 psi for sizes through 2-1/2 inch, dropping to 95,000 psi above that and to 75,000 psi above 4 inch. B7M is the lower-strength variant qualified for sour service per NACE MR0175, with yield at 80,000 psi.",
          "A193 Grade B8 Class 1 is solution-annealed stainless (Type 304) at 30,000 psi yield. B8 Class 2 is strain-hardened to 100,000 psi yield in smaller sizes. B8M is the molybdenum-bearing equivalent (Type 316) for corrosive service.",
          "A193 Grade B16 is a chromium-molybdenum-vanadium alloy for high-temperature service, with yield similar to B7 at room temperature but better retention of strength at elevated temperatures.",
          "The yield number sets the ceiling. Standard practice is to torque to 50% of bolt yield for general service. Critical service may push to 60% or 70%. Going above 70% is rare because the margin against yielding under thermal expansion or operational transients gets too thin.",
        ],
      },
      {
        heading: "Target Stress",
        paragraphs: [
          "For B7 studs at 105 ksi yield, 50% of yield is 52,500 psi. The bolt tension that produces that stress depends on the bolt root area. For a 7/8 inch B7 stud, the tensile stress area is about 0.462 square inches, giving a target tension of roughly 24,250 pounds.",
          "From T = K * F * D, with K = 0.15 (lightly lubricated), F = 24,250 lb, D = 0.875 inch, the target torque is 0.15 * 24,250 * 0.875 = 3,183 in-lb, or about 265 ft-lb.",
          "Run the same calculation with K = 0.20 (dry) and you get 354 ft-lb for the same target tension. With K = 0.12 (well-lubricated), you get 212 ft-lb. Same target stress, 67% spread in applied torque depending on the lubricant condition. That is why a torque value pulled out of a table without a stated K factor is essentially meaningless.",
        ],
      },
      {
        heading: "Gasket Selection",
        paragraphs: [
          "Different gaskets need different seating stresses. The minimum seating stress (Y in ASME Section VIII Division 1 Appendix 2 nomenclature) and the maintenance factor (m) vary significantly across gasket types.",
          "Compressed non-asbestos sheet (like Garlock 3000 or equivalent) seats at around 3,700 psi minimum, with m around 2.0 to 2.5. Easy to seat, but limited in pressure and temperature capability.",
          "Spiral wound gaskets with graphite filler seat at around 10,000 psi minimum, with m of 3.0. They are the workhorse for Class 150 through 600 process service.",
          "Ring-type joint gaskets seat by metal-on-metal contact in the ring groove. The required seating force is high (typically 20,000 to 30,000 psi at the ring), but the gasket then holds essentially regardless of internal pressure up to its rated limit.",
          "The total bolt force has to exceed the gasket seating force plus the hydrostatic end load with margin. On a 6 inch Class 300 flange with a spiral wound gasket, the required bolt load is on the order of 50,000 pounds total distributed across 8 studs. On the same flange with an RTJ ring, the required seating load is closer to 80,000 pounds. Same flange, same studs, different torque target.",
        ],
      },
      {
        heading: "Assembly Sequence",
        paragraphs: [
          "Even with the right torque target, getting there in the wrong sequence produces uneven gasket compression and joint leakage.",
          "Standard sequence is a cross pattern (sometimes called a star pattern), with bolts tightened in opposing pairs across the flange. For an 8-bolt pattern, that means 1-5-3-7-2-6-4-8 (numbering opposite bolts as pairs).",
          "Four passes is the field standard. First pass to 30% of target torque, all bolts in the cross pattern. Second pass to 60%. Third pass to 100%. Fourth pass at 100%, this time circumferentially in order (not cross pattern) to verify that no bolt is loose.",
          "Pause between passes is important. The gasket relaxes between passes as it compresses. Without the pause, the early-tightened bolts shed load as later bolts compress the gasket further. The four-pass procedure with pauses gives the gasket time to settle and produces more uniform load across the pattern.",
          "ASME PCC-1 (Guidelines for Pressure Boundary Bolted Flange Joint Assembly) is the document to reference for formal procedures. It covers everything from joint inspection through final torque verification.",
        ],
      },
      {
        heading: "Temperature Effects",
        paragraphs: [
          "Bolt stress relaxes at elevated temperature. Carbon steel bolts at 700 degrees F can lose 20% to 40% of their initial preload over the first 24 to 72 hours of service. Chromium-molybdenum alloys like B16 retain preload better but still relax.",
          "Differential thermal expansion compounds the problem. A B7 stud and an A105 flange have similar thermal expansion coefficients, so the differential is small. A B8 stainless stud on a carbon steel flange has a significantly higher expansion coefficient in the stud, which means the stud lengthens faster than the flange thickness grows. The result is increased clamp load on heat-up, sometimes pushing the bolt past yield if the cold torque was already aggressive.",
          "Re-torque after the first heat-up is industry practice for high-temperature service. The procedure: assemble cold to the target torque, bring the system up to operating temperature, let it stabilize, shut down, let it cool to a safe inspection temperature (typically below 200 F), and re-torque to the original target. The re-torque catches the relaxation that occurred during the first thermal cycle.",
        ],
      },
      {
        heading: "When Not To Use A Torque Wrench",
        paragraphs: [
          "Above about 1-1/4 inch bolt diameter, the torque required to reach target preload exceeds what a hand-operated wrench can comfortably deliver. Hydraulic torque wrenches help up to a point. Beyond that, the right tool is a hydraulic bolt tensioner.",
          "Tensioners stretch the stud directly with a hydraulic cylinder. They measure preload by hydraulic pressure (force = pressure * piston area), which is more accurate than torque-based methods because it bypasses the K factor entirely. The tensioner stretches the stud, the nut is run down to the flange, and the hydraulic pressure is released. The remaining elastic stretch in the stud holds the preload.",
          "For very critical service (nuclear, large compressor casings, primary pressure vessel closures), ultrasonic bolt elongation measurement is the gold standard. An ultrasonic gauge measures the actual stretch of the bolt as it is tightened, giving a direct readout of preload regardless of friction conditions. It is slow and expensive, but it produces preload accuracy in the single-digit percent range.",
        ],
      },
      {
        heading: "Common Torque Mistakes",
        paragraphs: [
          "Over-torquing on the assumption that more is better. Over-torque pushes the bolt past yield, which permanently deforms the stud and reduces its load capacity. The next thermal cycle finds the weakened stud and either snaps it or relaxes the joint.",
          "Under-lubricating, which leaves the K factor high and the bolt tension low. The joint seats apparently fine and leaks under operating pressure.",
          "Using a torque value from a chart without knowing the lubricant condition or the gasket type. The chart value was developed for a specific case that may not match yours.",
          "Skipping the cross pattern. Tightening bolts in order around the flange circumferentially produces a gasket compression that is high near the starting point and low at the finishing point. The gasket leaks at the low-load region.",
          "Re-using studs that have been torqued to yield. Once a stud has yielded, its elastic range is reduced. The next installation cannot reach the original preload reliably.",
        ],
      },
      {
        heading: "Pulling It Together",
        paragraphs: [
          "Torque is one input in a system. The system has to deliver enough clamp load to seat the gasket and maintain it through all operational conditions. Getting there requires the right stud material at the right grade, the right gasket for the service, a correctly characterized K factor, a documented assembly procedure with cross pattern and multiple passes, and where appropriate, a re-torque after the first thermal cycle.",
          "Our [bolt torque calculator](/tools/bolt-torque-calculator) walks through the calculation for standard B7, B7M, B8, and B16 studs across the common sizes and pressure classes, with K factor inputs for dry, lubricated, and heavily lubricated conditions. For deeper background on stud dimensions and material selection, the bolt-dimensions reference on [texasflange.com](https://www.texasflange.com/blog/bolt-dimensions/?ref=pipingflange-new) is a good companion piece.",
          "For studs, nuts, gaskets, and the technical support to specify them, call (281) 484-8325 or email sales@texasflange.com. We carry A193 B7, B7M, B8 Class 1 and 2, B8M, and B16 across the common sizes, with NACE-qualified material when sour service applies.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
