import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type FlangeNeed = { type: string; spec: string; use: string };
type Material = { name: string; reason: string };

type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  overview: string[];
  flangeNeeds: FlangeNeed[];
  materials: Material[];
  challenges: string[];
  standards: string[];
  ctaNote: string;
};

const industries: Industry[] = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    eyebrow: "Energy Sector",
    title: "Flanges and Fittings for Upstream, Midstream, and Downstream",
    intro:
      "From wellhead trees and BOP stacks to pipeline mainlines and refinery process units, oil and gas service demands the widest spread of pressure classes and material grades in the supply industry.",
    overview: [
      "Upstream operators run wellhead equipment, drilling spreads, and production manifolds at pressures that climb from API 2K through 20K. The metallurgy follows the well. Sweet service tolerates standard carbon, but sour wells covered by NACE MR0175 push specifications toward F22 chrome-moly and Inconel cladding to defeat sulfide stress cracking.",
      "Midstream pipeline work is a different animal. Long runs of gathering, transmission, and distribution piping rely on weld neck flanges in A105 or A350 LF2 for low temperature service. MSS SP-44 large diameter flanges show up at compressor and pump stations where ASME B16.5 stops at 24 inch.",
      "Downstream refining returns to high temperature and high pressure forgings with chrome-moly grades dominating hydroprocessing, FCC, and crude unit service. We supply across all three segments, often on the same order.",
    ],
    flangeNeeds: [
      {
        type: "API 6A Wellhead Flanges",
        spec: "2K through 20K, ring joint",
        use: "Christmas trees, BOP stacks, choke manifolds",
      },
      {
        type: "Weld Neck, Class 600 to 2500",
        spec: "ASME B16.5, RTJ face",
        use: "High pressure separators and production headers",
      },
      {
        type: "Weld Neck, Class 150 to 900",
        spec: "ASME B16.5 / B16.47 Series A",
        use: "Pipeline mainline, compressor stations",
      },
      {
        type: "Blind Flanges",
        spec: "Class 150 through 2500",
        use: "Vessel manways, pig launcher closures",
      },
      {
        type: "Long Weld Neck",
        spec: "Custom bore, Class 600+",
        use: "Nozzle replacement on production vessels",
      },
      {
        type: "Ring Joint Gaskets",
        spec: "R and BX style, soft iron through Inconel",
        use: "High pressure flange joints in sour service",
      },
    ],
    materials: [
      {
        name: "ASTM A105",
        reason:
          "Workhorse carbon steel for sweet service at moderate temperature. Lowest cost and broadest stocking depth.",
      },
      {
        name: "ASTM A350 LF2",
        reason:
          "Low temperature carbon for cold weather pipeline service and impact tested applications down to minus 50 F.",
      },
      {
        name: "ASTM A182 F22",
        reason:
          "2.25 Cr 1 Mo chrome-moly for high temperature hydroprocessing and sour service per NACE MR0175.",
      },
      {
        name: "ASTM A182 F11",
        reason:
          "1.25 Cr 0.5 Mo for moderate elevated temperature service in refinery and gas processing.",
      },
      {
        name: "Inconel 625 and 825",
        reason:
          "Severe sour wells with high H2S and chloride content where carbon steel cracking is a certainty.",
      },
    ],
    challenges: [
      "Sour service certification with NACE MR0175 hardness limits and full PMI documentation.",
      "Pressure class range from Class 150 process headers to API 20K wellhead in the same project scope.",
      "Long lead time forgings in large diameter and exotic alloys that must be sourced against tight rig schedules.",
      "Charpy impact testing for cold service pipelines crossing northern terrain.",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47 Series A and B",
      "API 6A (2K through 20K)",
      "API 6BX",
      "NACE MR0175 / ISO 15156",
      "MSS SP-44",
      "ASME B31.3 (process)",
      "ASME B31.4 and B31.8 (pipeline)",
    ],
    ctaNote:
      "Send your line list with service conditions and NACE requirements and we will quote with full MTRs and PMI.",
  },
  {
    slug: "petrochemical",
    name: "Petrochemical",
    eyebrow: "Process Industry",
    title: "Reactor, Column, and Transfer Piping Specifications",
    intro:
      "Petrochemical plants run on tight tolerances, traceable materials, and a flange list that spans ethylene cracking, polymer reactors, and specialty chemicals.",
    overview: [
      "A petrochemical complex is built around reactors, distillation columns, and the transfer piping that ties them together. Class 150 and 300 dominate utility and lower temperature service, while Class 600 through 1500 weld necks handle high temperature transfer lines and reactor feed.",
      "Material selection swings between carbon steel for benign streams and chrome-moly forgings for hot hydrocarbon service. Stainless grades cover corrosive feedstocks and intermediate products. The plant turnaround calendar drives demand spikes that require a supplier who can pull from stock rather than promise a mill rolling.",
      "Material traceability is non-negotiable. Every flange ships with mill test reports tied to heat numbers, and PMI confirmation on alloy grades is routine before any joint goes into a high pressure service file.",
    ],
    flangeNeeds: [
      {
        type: "Weld Neck, Class 150 to 600",
        spec: "ASME B16.5, raised face",
        use: "Utility piping, cooling water, low pressure process",
      },
      {
        type: "Weld Neck, Class 900 to 1500",
        spec: "ASME B16.5, RTJ or tongue and groove",
        use: "Reactor feed, hot oil transfer, hydrogen service",
      },
      {
        type: "Slip-On Flanges",
        spec: "Class 150 and 300",
        use: "Lower critical utility lines for cost and fit-up speed",
      },
      {
        type: "Spectacle Blinds and Paddle Blanks",
        spec: "Class 150 through 900",
        use: "Maintenance isolation between process units",
      },
      {
        type: "Large Diameter Weld Neck",
        spec: "ASME B16.47 Series A, 26 to 60 inch",
        use: "Column overhead and tower feed piping",
      },
      {
        type: "Stub End and Lap Joint",
        spec: "Stainless and alloy bores",
        use: "Lined and clad piping with carbon backing flanges",
      },
    ],
    materials: [
      {
        name: "ASTM A105",
        reason:
          "Carbon steel for utility, instrument air, cooling water, and lower temperature hydrocarbon.",
      },
      {
        name: "ASTM A182 F11",
        reason:
          "Chrome-moly for moderate temperature transfer piping in refining and ethylene service.",
      },
      {
        name: "ASTM A182 F22",
        reason:
          "Higher chromium for hot hydrogen, hydroprocessing, and reactor effluent lines.",
      },
      {
        name: "ASTM A182 F304 and F316L",
        reason:
          "Stainless grades for corrosive intermediates, monomer service, and recovery loops.",
      },
      {
        name: "Alloy 20",
        reason:
          "Sulfuric acid service and select chloride streams that destroy 316L.",
      },
    ],
    challenges: [
      "Long turnaround flange lists with hundreds of line items needing simultaneous delivery windows.",
      "Hot hydrogen and high temperature hydrocarbon requiring chrome-moly forgings with full chemistry reports.",
      "Mixing alloy stub ends with carbon backing flanges to control cost on lined piping.",
      "Strict positive material identification on every alloy piece before installation sign-off.",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47 Series A",
      "ASME B31.3",
      "ASME Section VIII (vessel nozzles)",
      "MSS SP-25 (marking)",
      "MSS SP-44",
      "NACE MR0103 (refining sour service)",
    ],
    ctaNote:
      "Turnaround season comes fast. Get your flange list to us early and we will lock in stock with full traceability.",
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    eyebrow: "Utility Sector",
    title: "Steam, Cooling Water, and Balance of Plant Flanges",
    intro:
      "Power plants live and die by their flange joints. Main steam and reheat lines see creep temperatures while the cooling water side moves enormous volumes at modest pressure.",
    overview: [
      "Main steam piping runs hot enough to make creep the dominant failure mode. F22 chrome-moly handles the older subcritical fleet, while supercritical and ultra-supercritical units lean on F91 grade 91 chrome-moly with strict post weld heat treatment and hardness control. These are not commodity flanges.",
      "On the cooling water side, AWWA C207 Class B, D, and E lightweight steel flanges dominate. Diameters reach 96 inch and beyond at the condenser inlet. Cost matters at this scale, and matching the AWWA bolt pattern is the difference between a working tie-in and a re-drill.",
      "Combined-cycle plants add HRSG drum nozzles, gas turbine fuel lines, and a balance of plant that touches almost every flange material in the catalog. We stock for both the high temperature steam side and the high volume cooling water side.",
    ],
    flangeNeeds: [
      {
        type: "Weld Neck, Class 600 to 2500",
        spec: "ASME B16.5, RTJ for main steam",
        use: "Main steam, reheat, hot reheat piping",
      },
      {
        type: "AWWA C207 Class D and E",
        spec: "Hub and ring flanges, 4 to 144 inch",
        use: "Condenser cooling water, circulating water",
      },
      {
        type: "Class 125LW Lightweight",
        spec: "ANSI B16.1 bolt pattern compatible",
        use: "Low pressure pump suction and service water",
      },
      {
        type: "Large Diameter Weld Neck",
        spec: "ASME B16.47 Series A",
        use: "Feedwater and HRSG drum interconnects",
      },
      {
        type: "Long Weld Neck",
        spec: "F22 or F91, custom bore",
        use: "Header nozzle replacements in steam service",
      },
      {
        type: "Orifice Flanges",
        spec: "Class 300 to 1500",
        use: "Flow measurement on feedwater and steam",
      },
    ],
    materials: [
      {
        name: "ASTM A182 F22",
        reason:
          "Standard chrome-moly for high temperature steam piping in subcritical units.",
      },
      {
        name: "ASTM A182 F91",
        reason:
          "Grade 91 for supercritical and ultra-supercritical main steam where creep strength is critical.",
      },
      {
        name: "ASTM A105",
        reason:
          "Carbon steel for balance of plant, service water, and lower temperature steam.",
      },
      {
        name: "ASTM A350 LF2",
        reason:
          "Low temperature carbon for outdoor service water in cold climate sites.",
      },
      {
        name: "AWWA C207 Carbon Plate",
        reason:
          "Hub and ring flanges for large diameter cooling water at the lowest cost per joint.",
      },
    ],
    challenges: [
      "Creep service flanges in F91 requiring controlled chemistry, hardness, and post weld heat treatment.",
      "Massive cooling water flanges to 144 inch where freight and lead time dominate the buying decision.",
      "Mixing ASME high pressure standards with AWWA lightweight standards on the same project drawing set.",
      "Outage windows that compress delivery requirements into days, not weeks.",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47 Series A",
      "AWWA C207 (Class B, D, E, F)",
      "ANSI B16.1 (cast iron pattern)",
      "ASME B31.1 (power piping)",
      "ASME Section I",
      "MSS SP-44",
    ],
    ctaNote:
      "Outage planning starts now. Send your steam side and cooling water lists together and we will quote the whole package.",
  },
  {
    slug: "waterworks",
    name: "Water & Wastewater",
    eyebrow: "Municipal Sector",
    title: "AWWA Flanges for Treatment, Distribution, and Collection",
    intro:
      "Municipal water and wastewater systems run on AWWA C207 flanges and the lightweight ANSI cast iron pattern. Diameters are large, pressures are modest, and budgets are tight.",
    overview: [
      "Water treatment plants, distribution mains, lift stations, and aeration basins all share a common bolt pattern lineage. AWWA C207 Class B at 86 psi, Class D at 175 psi, Class E at 275 psi, and Class F at 300 psi cover the working pressures of nearly every municipal system in the country.",
      "Class 125LW lightweight steel flanges drop in against cast iron valves and fittings using the ANSI B16.1 pattern. This is the day-to-day stocking item for treatment plant work where Class 150 ASME would be both heavier and more expensive than the service requires.",
      "Diameters from 4 inch through 144 inch are routine. Plant retrofits, raw water intakes, and effluent outfalls all push the upper end of available sizing. We supply municipal contractors, treatment plant maintenance, and large diameter pipeline projects from common stock.",
    ],
    flangeNeeds: [
      {
        type: "AWWA C207 Class D",
        spec: "Hub flange, 4 to 144 inch",
        use: "Standard 175 psi distribution and treatment piping",
      },
      {
        type: "AWWA C207 Class E",
        spec: "Hub flange, 4 to 96 inch",
        use: "275 psi service in high head distribution",
      },
      {
        type: "AWWA C207 Class F",
        spec: "Hub flange, 4 to 96 inch",
        use: "300 psi force mains and pump discharge",
      },
      {
        type: "Class 125LW Lightweight Steel",
        spec: "ANSI B16.1 bolt pattern",
        use: "Drop-in replacement for cast iron at low pressure",
      },
      {
        type: "Blind Flanges",
        spec: "AWWA pattern, Class D and E",
        use: "Vault terminations and future tie-in points",
      },
      {
        type: "Plate Flanges",
        spec: "Flat ring, AWWA pattern",
        use: "Tank nozzles and lower pressure connections",
      },
    ],
    materials: [
      {
        name: "Carbon Steel Plate",
        reason:
          "AWWA C207 is fabricated from rolled plate. Cost effective at large diameters where forgings would be uneconomical.",
      },
      {
        name: "ASTM A105 Forged Carbon",
        reason:
          "Used where ASME B16.5 sizing is specified for higher pressure plant interfaces.",
      },
      {
        name: "316L Stainless",
        reason:
          "Chlorine contact chambers, chemical feed systems, and brackish water at coastal plants.",
      },
      {
        name: "Ductile Iron",
        reason:
          "Some plant standards still call out ductile iron flanged fittings for buried service compatibility.",
      },
    ],
    challenges: [
      "Matching AWWA bolt patterns to existing cast iron valves and fittings without re-drilling on site.",
      "Large diameter lead times that drag if not stocked, especially above 60 inch.",
      "Coating requirements for buried and submerged service, often fusion bonded epoxy.",
      "Chemical feed lines that demand stainless even though the plant runs carbon everywhere else.",
    ],
    standards: [
      "AWWA C207 (Class B, D, E, F)",
      "ANSI B16.1 (cast iron pattern)",
      "ASME B16.5 (process interfaces)",
      "AWWA C115 (flanged ductile iron)",
      "NSF 61 (potable water contact)",
      "AWWA C213 (FBE coating)",
    ],
    ctaNote:
      "Plant retrofits and large diameter mains are our daily work. Send drawings and we will quote AWWA classes from stock.",
  },
  {
    slug: "chemical-processing",
    name: "Chemical Processing",
    eyebrow: "Process Industry",
    title: "Stainless, Exotic Alloy, and Lined Flange Supply",
    intro:
      "Chemical plants live with corrosion as a daily fact. Material selection drives every flange decision, and getting it wrong is measured in shutdown hours.",
    overview: [
      "Stainless 304 and 316L cover the broad middle of chemical service. They handle most organic process streams, intermediate products, and utility piping in a plant where carbon steel would pit out in months.",
      "Severe service pushes the material list into Hastelloy C276 and C22 for chloride and acid combinations, Monel 400 for hydrofluoric acid, and Alloy 20 for sulfuric. These are not stocked at the same depth as carbon, and lead time planning is part of the design process.",
      "Lined flanges, typically PTFE or PFA over a carbon steel backing, give plants the chemical resistance of an exotic at a fraction of the cost. Bolt torque control on lined joints matters as much as the gasket selection.",
    ],
    flangeNeeds: [
      {
        type: "Weld Neck, Class 150 and 300",
        spec: "ASME B16.5, 316L and 304L",
        use: "General process and intermediate product transfer",
      },
      {
        type: "Hastelloy and Inconel Weld Neck",
        spec: "Class 150 to 600",
        use: "Chloride and high temperature acid service",
      },
      {
        type: "Lap Joint with Stub End",
        spec: "Stainless or alloy stub, carbon backing",
        use: "Cost effective alloy piping with reusable flanges",
      },
      {
        type: "PTFE Lined Flanges",
        spec: "Carbon backing with fluoropolymer liner",
        use: "Hydrochloric, sulfuric, and aggressive halide service",
      },
      {
        type: "Blind Flanges",
        spec: "316L and exotic alloys",
        use: "Vessel manways and isolation points",
      },
      {
        type: "Reducing Flanges",
        spec: "Stainless and alloy",
        use: "Pump and valve transitions in process headers",
      },
    ],
    materials: [
      {
        name: "316L Stainless",
        reason:
          "Standard chemical service. Low carbon variant prevents sensitization at weld zones.",
      },
      {
        name: "304L Stainless",
        reason:
          "Lower cost stainless for less aggressive service where chloride exposure is limited.",
      },
      {
        name: "Hastelloy C276",
        reason:
          "Wet chlorine, hypochlorite, and mixed acid environments that destroy stainless grades.",
      },
      {
        name: "Monel 400",
        reason:
          "Hydrofluoric acid service where most alloys fail rapidly.",
      },
      {
        name: "Alloy 20",
        reason:
          "Sulfuric acid at intermediate concentrations. Specialty grade with limited stocking depth.",
      },
    ],
    challenges: [
      "Material selection trade-offs between stainless, exotic alloy, and lined construction at very different price points.",
      "Bolt torque control on PTFE lined flanges to avoid cold flow and gasket extrusion.",
      "Lead times on exotic alloys that can stretch into months if not planned around the turnaround calendar.",
      "Cross contamination prevention during fabrication when stainless and carbon are handled in the same shop.",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47",
      "ASME B31.3 (process piping)",
      "MSS SP-43 (stainless slip-on)",
      "ASTM A182 (forged alloy)",
      "NACE MR0103",
    ],
    ctaNote:
      "Tell us the chemistry, temperature, and concentration and we will return a material recommendation with the flange quote.",
  },
  {
    slug: "mining",
    name: "Mining & Minerals",
    eyebrow: "Heavy Industry",
    title: "Slurry, Tailings, and Process Water Flange Supply",
    intro:
      "Mining piping is rough service. Abrasion, impact, and remote sites combine to make replacement planning as important as initial specification.",
    overview: [
      "Slurry lines move ore concentrate, tailings, and process water at velocities that wear pipe walls thin in a season. Carbon steel weld necks with replaceable wear components are the standard, with rubber lining on the pipe interior to take the abrasive hit.",
      "Tailings transfer runs long distances from concentrator to impoundment, often at elevations that demand serious pump pressure. Flange selection follows the line classification, but joint integrity is critical because leaks on tailings are an environmental incident, not just a maintenance call.",
      "Dewatering, process water makeup, and reagent feed round out the typical mine site flange list. We supply remote project work where on-site inventory has to cover months of operation without a quick reorder.",
    ],
    flangeNeeds: [
      {
        type: "Weld Neck, Class 150 and 300",
        spec: "ASME B16.5, A105 carbon",
        use: "Slurry lines, tailings transfer, process headers",
      },
      {
        type: "Blind Flanges",
        spec: "Class 150 to 600",
        use: "Pump strainer covers, line isolation, future tie-ins",
      },
      {
        type: "Plate Flanges, Drilled Carbon",
        spec: "Custom drilling, larger diameters",
        use: "Tank nozzles and lower pressure tailings basins",
      },
      {
        type: "Lap Joint with Stub Ends",
        spec: "Carbon backing with rubber lined stub",
        use: "Lined slurry piping with rotatable backing flange",
      },
      {
        type: "Large Diameter Weld Neck",
        spec: "ASME B16.47 Series A, 26 to 60 inch",
        use: "Concentrator feed and tailings discharge",
      },
      {
        type: "Reducing Flanges",
        spec: "Carbon steel",
        use: "Pump suction transitions in slurry service",
      },
    ],
    materials: [
      {
        name: "ASTM A105",
        reason:
          "Standard carbon steel for the bulk of mine site piping. Cost and stocking depth drive the choice.",
      },
      {
        name: "ASTM A350 LF2",
        reason:
          "Cold climate sites where impact testing is required for outdoor service.",
      },
      {
        name: "316L Stainless",
        reason:
          "Reagent and chemical feed where acid leach or cyanide chemistry is in play.",
      },
      {
        name: "Duplex 2205",
        reason:
          "Chloride rich process water and seawater intake at coastal operations.",
      },
    ],
    challenges: [
      "Wear life on slurry flange faces in abrasive service requiring rubber liners or weld overlay.",
      "Remote sites with long supply chains where stocking the wrong item costs weeks.",
      "Environmental sensitivity on tailings lines where joint integrity is regulated, not optional.",
      "Cold weather operations needing low temperature carbon and ductile gasket choices.",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47 Series A",
      "ASME B31.3",
      "MSS SP-44",
      "ASTM A105 and A350",
      "AS 4087 (Australian mine sites where applicable)",
    ],
    ctaNote:
      "Remote project quoting and stocking packages are routine for us. Send the bill of materials and we will build the supply plan.",
  },
  {
    slug: "pulp-paper",
    name: "Pulp & Paper",
    eyebrow: "Process Industry",
    title: "Duplex, Super Duplex, and Liquor Service Flanges",
    intro:
      "A pulp mill is a chloride corrosion problem looking for somewhere to happen. Bleach plants, recovery boilers, and liquor cycles each demand specific material answers.",
    overview: [
      "Bleach plant piping is the most aggressive service in the mill. Chlorine dioxide, hypochlorite, and the chloride content of process water combine to eat stainless grades that would last decades elsewhere. Duplex 2205 and super duplex 2507 are the practical answer, with the higher PREN of 2507 reserved for the worst stages.",
      "The recovery cycle moves white liquor, green liquor, and black liquor through evaporators, recovery boilers, and the causticizing plant. Each stream has its own chemistry. Carbon steel works in some service, while duplex shows up where chlorides and temperatures climb together.",
      "Brown stock washing, screening, and stock prep round out the mill. We supply duplex and super duplex weld necks and blinds in the sizes and classes that bleach plant and liquor service actually use, rather than the catalog standard.",
    ],
    flangeNeeds: [
      {
        type: "Duplex 2205 Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Bleach plant intermediate stages, brown stock",
      },
      {
        type: "Super Duplex 2507 Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Chlorine dioxide stages and hot chloride service",
      },
      {
        type: "316L Weld Neck",
        spec: "Class 150 and 300",
        use: "Utility piping and lower aggression process",
      },
      {
        type: "Carbon Weld Neck",
        spec: "A105, Class 150 to 600",
        use: "White liquor, green liquor, and steam balance of plant",
      },
      {
        type: "Blind Flanges",
        spec: "Duplex, super duplex, stainless, carbon",
        use: "Vessel manways, evaporator nozzles, screen plant",
      },
      {
        type: "Lap Joint with Stub End",
        spec: "Duplex stub with carbon backing",
        use: "Cost control on long duplex runs",
      },
    ],
    materials: [
      {
        name: "Duplex 2205",
        reason:
          "Standard bleach plant material. Pitting and crevice resistance well above 316L in chloride service.",
      },
      {
        name: "Super Duplex 2507",
        reason:
          "PREN above 40 for the hottest chloride stages where 2205 still pits.",
      },
      {
        name: "316L Stainless",
        reason:
          "Lower aggression process streams and utility piping where duplex would be overspec.",
      },
      {
        name: "ASTM A105",
        reason:
          "Carbon steel for white liquor, steam, and balance of plant where chemistry allows.",
      },
    ],
    challenges: [
      "Stocking depth on duplex and super duplex flanges in the sizes mills actually use, not just commodity ranges.",
      "Material confusion between 2205 and 2507 that has to be resolved with PMI at receiving.",
      "Welding procedures on duplex that demand controlled heat input to preserve the phase balance.",
      "Recovery boiler outage windows that compress delivery into days for high spec material.",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47",
      "ASTM A182 F51 (2205) and F53 (2507)",
      "ASME B31.3",
      "NORSOK M-630 (where referenced)",
    ],
    ctaNote:
      "Bleach plant and recovery cycle outages are our planning window. Send the duplex and super duplex list early.",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    eyebrow: "Sanitary Process",
    title: "316L Sanitary Flanges and CIP Compatible Fittings",
    intro:
      "Food and beverage plants run lower pressures than oil and gas but hold purity standards that the energy side never sees. 316L stainless is the floor, not the ceiling.",
    overview: [
      "Process piping in a dairy, brewery, juice plant, or pharma-adjacent facility runs on 316L stainless almost without exception. The low carbon variant prevents weld zone sensitization that would create corrosion sites a CIP cycle could not clean.",
      "Sanitary finishes on flange faces and bore surfaces reduce bacterial harbor sites. The whole system has to clean-in-place without disassembly, which puts surface finish, drainability, and dead leg prevention into the flange specification.",
      "Pressure classes are mostly modest. Class 150 covers the great majority of process piping, with Class 300 showing up in steam utility lines and a few high pressure homogenization applications. Where the spec calls for tri-clamp or sanitary ferrule connections, we supply those alongside the ASME B16.5 piping that ties the system together.",
    ],
    flangeNeeds: [
      {
        type: "316L Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Process piping, CIP loops, product transfer",
      },
      {
        type: "316L Slip-On",
        spec: "Class 150",
        use: "Utility and lower critical service",
      },
      {
        type: "Sanitary Tri-Clamp Adapters",
        spec: "316L with sanitary finish",
        use: "Equipment connections to ASME piping",
      },
      {
        type: "316L Blind Flanges",
        spec: "Class 150 and 300",
        use: "Tank nozzles, isolation, future expansion",
      },
      {
        type: "Lap Joint with Stub End",
        spec: "316L stub, 304 backing",
        use: "Rotatable joints on equipment connections",
      },
    ],
    materials: [
      {
        name: "316L Stainless",
        reason:
          "Standard for product contact. Low carbon prevents intergranular corrosion after welding.",
      },
      {
        name: "304L Stainless",
        reason:
          "Acceptable for utility, steam, and CIP supply lines that do not contact product.",
      },
      {
        name: "316L with Sanitary Finish",
        reason:
          "Required at product contact surfaces. 32 Ra or better for many specifications.",
      },
    ],
    challenges: [
      "Surface finish requirements that go beyond standard mill finish on 316L flange faces and bores.",
      "Dead leg avoidance and full drainability designed into every flanged transition.",
      "Documentation of grade and finish for FDA and 3-A audit readiness.",
      "Mixing sanitary tri-clamp connections with ASME B16.5 piping in the same system.",
    ],
    standards: [
      "ASME B16.5",
      "ASME BPE (Bioprocessing Equipment)",
      "3-A Sanitary Standards",
      "FDA 21 CFR (food contact)",
      "ASTM A182 F316L",
    ],
    ctaNote:
      "Sanitary spec is a stocked item for us. Send your line list with finish requirements and we will quote 316L from inventory.",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    eyebrow: "Ag & Irrigation",
    title: "Irrigation, Fertilizer, and Anhydrous Ammonia Flanges",
    intro:
      "Agricultural piping covers a wide spread, from large diameter irrigation mains running at modest pressure to anhydrous ammonia service that prohibits carbon steel.",
    overview: [
      "Irrigation mains, pump station discharge, and main canal turnouts use carbon steel weld necks and AWWA C207 hub flanges. Diameters can be large but pressures are usually modest, keeping cost in line at the volumes that ag projects demand.",
      "Fertilizer transfer and storage piping varies with the product. Liquid urea, ammonium nitrate solutions, and phosphate slurries each have material implications that change the flange spec. Carbon steel covers some service, stainless covers more.",
      "Anhydrous ammonia is the strict case. Carbon steel is not permitted in service. Stainless steel weld necks and forged fittings carry the storage and transfer piping at retail dealers, terminals, and application equipment. We supply both the irrigation side and the fertilizer side from the same warehouse.",
    ],
    flangeNeeds: [
      {
        type: "Carbon Steel Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Pump station discharge, transfer headers",
      },
      {
        type: "AWWA C207 Class D",
        spec: "Hub flange, 4 to 96 inch",
        use: "Irrigation mains and lateral turnouts",
      },
      {
        type: "316 Stainless Weld Neck",
        spec: "ASME B16.5, Class 300",
        use: "Anhydrous ammonia transfer and storage piping",
      },
      {
        type: "Blind Flanges",
        spec: "Carbon and stainless, Class 150 to 300",
        use: "Tank manways, isolation, dead end terminations",
      },
      {
        type: "Reducing Flanges",
        spec: "Carbon steel",
        use: "Pump connections and header transitions",
      },
    ],
    materials: [
      {
        name: "ASTM A105",
        reason:
          "Standard carbon steel for irrigation and most fertilizer service.",
      },
      {
        name: "316 and 316L Stainless",
        reason:
          "Mandatory for anhydrous ammonia. Also used for aggressive fertilizer chemistries.",
      },
      {
        name: "ASTM A350 LF2",
        reason:
          "Cold weather impact testing for northern plains and prairie operations.",
      },
      {
        name: "AWWA C207 Carbon Plate",
        reason:
          "Large diameter irrigation at the lowest cost per joint.",
      },
    ],
    challenges: [
      "Anhydrous ammonia material restriction that disqualifies carbon and requires full stainless.",
      "Seasonal demand spikes that compress delivery windows around planting and harvest.",
      "Mixed bolt patterns between AWWA irrigation and ASME process piping on the same project.",
      "Coating selection for buried service in corrosive soil.",
    ],
    standards: [
      "ASME B16.5",
      "AWWA C207",
      "ANSI K61.1 (anhydrous ammonia)",
      "ASME B31.3",
      "ASTM A182 F316",
    ],
    ctaNote:
      "Seasonal ag work moves fast. Get your bill of materials in early and we will hold the stock for your delivery window.",
  },
  {
    slug: "hvac",
    name: "HVAC & Mechanical",
    eyebrow: "Building Systems",
    title: "Chilled Water, Heating, and Mechanical Flange Supply",
    intro:
      "Commercial and industrial HVAC runs on a mix of lightweight cooling water flanges and standard ASME B16.5 for process and steam loops. Pressure is moderate, volume is high, and freight per project matters.",
    overview: [
      "Chilled water systems serve everything from a single high-rise to a campus central plant. AWWA-style lightweight flanges and Class 125LW handle the working pressures while keeping joint cost and weight reasonable. At larger diameters the cost savings against ASME B16.5 Class 150 are substantial.",
      "Hot water heating loops and condenser water tend to follow the same lightweight pattern. Steam piping for humidification, sterilization, and process heat steps up to ASME B16.5 Class 150 or 300 depending on operating pressure.",
      "Mechanical contractors and design-build firms buy across the full mix. We supply both the lightweight cooling side and the higher pressure steam and process side, with the right bolt patterns for each system.",
    ],
    flangeNeeds: [
      {
        type: "Class 125LW Lightweight Steel",
        spec: "ANSI B16.1 bolt pattern compatible",
        use: "Chilled water and condenser water mains",
      },
      {
        type: "AWWA C207 Class B and D",
        spec: "Hub flange, 4 to 60 inch",
        use: "Central plant cooling water and pump headers",
      },
      {
        type: "Carbon Steel Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Steam piping, hot water heating, process loops",
      },
      {
        type: "Blind Flanges",
        spec: "Class 125LW and Class 150",
        use: "Future tie-ins, drain points, system isolation",
      },
      {
        type: "Reducing Flanges",
        spec: "Carbon steel",
        use: "Pump suction and chiller connections",
      },
    ],
    materials: [
      {
        name: "ASTM A105",
        reason:
          "Standard carbon steel for steam, hot water, and most mechanical service.",
      },
      {
        name: "Carbon Steel Plate",
        reason:
          "Used in fabricated AWWA hub flanges for large diameter cooling water at low cost.",
      },
      {
        name: "316L Stainless",
        reason:
          "Steam humidification and process service where corrosion or purity demands it.",
      },
      {
        name: "ASTM A350 LF2",
        reason:
          "Outdoor cooling tower piping in cold climates requiring impact testing.",
      },
    ],
    challenges: [
      "Matching lightweight Class 125LW bolt patterns against ASME B16.5 Class 150 valves on the same line.",
      "Large diameter chilled water mains where freight and shop fit-up dominate cost.",
      "Schedule pressure on commercial construction that does not tolerate flange lead time.",
      "Mixing carbon steel mechanical piping with stainless steam humidification on the same project.",
    ],
    standards: [
      "ASME B16.5",
      "ANSI B16.1 (cast iron pattern)",
      "AWWA C207",
      "ASME B31.9 (building services piping)",
      "ASME B31.1 (power piping for high pressure steam)",
    ],
    ctaNote:
      "Commercial and central plant work is high volume for us. Send the schedule and we will quote the lightweight and ASME mix together.",
  },
  {
    slug: "marine",
    name: "Marine & Shipbuilding",
    eyebrow: "Marine Sector",
    title: "Seawater, Bronze, and Copper-Nickel Flange Supply",
    intro:
      "Seawater is patient and aggressive. Marine piping demands material answers that carbon steel cannot give, even with the best coating in the world.",
    overview: [
      "Seawater cooling, ballast, fire main, and bilge service make up the bulk of a ship's piping. Carbon steel is used in some service with proper coating, but the long term answer at the joint is non-ferrous. Monel 400, copper-nickel 90/10 and 70/30, and aluminum bronze cover the corrosion-critical service.",
      "Naval and commercial vessel specifications draw from ABS, USCG, and ABYC standards depending on flag and trade. Material certifications, traceability, and class society approval shape the supply package. Shipyard schedules are unforgiving.",
      "Beyond seawater, marine piping includes fuel oil, lube oil, hydraulic, and steam service where standard carbon and chrome-moly grades return to the line list. Shipbuilders and marine repair yards source the full mix from a single supplier when they can find one.",
    ],
    flangeNeeds: [
      {
        type: "Monel 400 Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Seawater cooling, fire main, brine service",
      },
      {
        type: "Copper-Nickel 90/10 Weld Neck",
        spec: "MIL-F-20670, ASME B16.5",
        use: "Saltwater piping at moderate temperature",
      },
      {
        type: "Aluminum Bronze Flanges",
        spec: "Class 150 and 300",
        use: "Pump and valve connections in seawater service",
      },
      {
        type: "Carbon Steel Weld Neck",
        spec: "ASME B16.5, Class 150 and 300",
        use: "Fuel oil, hydraulic, and steam service",
      },
      {
        type: "Blind Flanges",
        spec: "Monel, copper-nickel, carbon",
        use: "Sea chest covers, tank manways, isolation",
      },
    ],
    materials: [
      {
        name: "Monel 400",
        reason:
          "Premier seawater alloy. Resists pitting, crevice corrosion, and stress corrosion cracking in chloride service.",
      },
      {
        name: "Copper-Nickel 90/10",
        reason:
          "Standard saltwater piping material. Lower cost than Monel with strong biofouling resistance.",
      },
      {
        name: "Aluminum Bronze",
        reason:
          "Pump and valve connections in seawater. Cast or forged depending on size.",
      },
      {
        name: "ASTM A105 with Coating",
        reason:
          "Carbon steel for fuel oil, lube oil, and other service away from direct seawater contact.",
      },
    ],
    challenges: [
      "Galvanic corrosion control when mixing non-ferrous and ferrous flanges in the same piping system.",
      "Class society approval and material certification for ABS, USCG, and other regulatory bodies.",
      "Lead times on Monel and copper-nickel in larger diameters that strain shipyard schedules.",
      "Outfitting space constraints that drive compact joint designs and stub end use.",
    ],
    standards: [
      "ASME B16.5",
      "MIL-F-20670 (copper-nickel)",
      "ABS Rules for Building and Classing Steel Vessels",
      "USCG 46 CFR (commercial vessel piping)",
      "ABYC H-22 (cooling water systems)",
      "NAVSEA specifications (naval applications)",
    ],
    ctaNote:
      "Shipyard procurement runs tight. Send the class spec and material list and we will quote with full certifications.",
  },
  {
    slug: "data-centers",
    name: "Data Centers",
    eyebrow: "Critical Facilities",
    title: "Cooling Loop and Critical Facility Flange Supply",
    intro:
      "Data center construction is now one of the fastest growing sectors for industrial piping. Cooling loops dominate, with reliability and schedule outweighing nearly every other consideration.",
    overview: [
      "Chilled water and condenser water loops carry the cooling load from chillers and cooling towers to the CRAH and CRAC units on the data floor. Volume is high, pressure is modest, and the flange list runs to lightweight Class 125LW and AWWA C207 hub flanges across most of the system.",
      "Process cooling water, makeup water, and condensate return round out the wet side. ASME B16.5 Class 150 shows up at chiller and pump connections where the equipment specification calls for it, mixed in with lightweight on the main runs.",
      "Schedule is the constant. Data center projects do not slip waiting for flanges. Stocking depth and delivery reliability matter more than commodity price spread, and the spec sheet rewards a supplier who can move on the same week the drawings hit.",
    ],
    flangeNeeds: [
      {
        type: "Class 125LW Lightweight Steel",
        spec: "ANSI B16.1 bolt pattern compatible",
        use: "Chilled water and condenser water mains",
      },
      {
        type: "AWWA C207 Class B and D",
        spec: "Hub flange, 4 to 60 inch",
        use: "Cooling tower piping, pump headers, large loops",
      },
      {
        type: "ASME B16.5 Weld Neck Class 150",
        spec: "Carbon steel, raised face",
        use: "Chiller and pump connections, process cooling",
      },
      {
        type: "Blind Flanges",
        spec: "Class 125LW and Class 150",
        use: "Future capacity tie-ins, drain points, isolation",
      },
      {
        type: "Reducing Flanges",
        spec: "Carbon steel",
        use: "Pump suction and main loop transitions",
      },
    ],
    materials: [
      {
        name: "ASTM A105",
        reason:
          "Standard carbon steel for chiller, pump, and equipment connections.",
      },
      {
        name: "Carbon Steel Plate",
        reason:
          "Used in fabricated AWWA hub flanges for large cooling tower and main loop diameters.",
      },
      {
        name: "316L Stainless",
        reason:
          "Process cooling and humidification loops where water chemistry is more aggressive.",
      },
      {
        name: "ASTM A350 LF2",
        reason:
          "Outdoor cooling tower piping in cold climate facilities where impact testing is required.",
      },
    ],
    challenges: [
      "Schedule compression that does not tolerate the lead times typical in heavier industrial service.",
      "Mixing lightweight Class 125LW patterns against ASME B16.5 Class 150 equipment connections cleanly.",
      "Large diameter cooling water flanges where freight and storage at the construction site matter.",
      "Future expansion provisions that require blind flanges and tie-in points designed in from day one.",
    ],
    standards: [
      "ASME B16.5",
      "ANSI B16.1 (cast iron pattern)",
      "AWWA C207",
      "ASME B31.9 (building services piping)",
      "ASHRAE design references",
    ],
    ctaNote:
      "Data center work moves on schedule, not on price. Send the loop list and we will commit to a delivery window that holds.",
  },
];

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) {
    return {
      title: "Industry Not Found | Texas Flange & Fitting Supply",
    };
  }
  return {
    title: `${industry.name} Flange Supply | Texas Flange & Fitting Supply`,
    description: industry.intro,
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) {
    notFound();
  }

  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            {industry.eyebrow}
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">
            {industry.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            {industry.intro}
          </p>
          <div className="mt-8">
            <Link
              href="/industries"
              className="text-[#B45309] hover:text-white transition text-sm uppercase tracking-wider"
            >
              All Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Industry Overview
          </p>
          <h2 className="font-display text-4xl text-[#1B1F23] mb-8">
            How {industry.name} Piping Actually Looks
          </h2>
          <div className="space-y-6 max-w-4xl">
            {industry.overview.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-gray-700 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Typical Flange Selections
          </p>
          <h2 className="font-display text-4xl text-[#1B1F23] mb-10">
            What We Supply for {industry.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.flangeNeeds.map((need, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6"
              >
                <h3 className="font-display text-xl text-[#1B1F23] mb-2">
                  {need.type}
                </h3>
                <p className="text-[#B45309] text-sm uppercase tracking-wider mb-3">
                  {need.spec}
                </p>
                <p className="text-gray-700 leading-relaxed">{need.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Material Selection
          </p>
          <h2 className="font-display text-4xl text-[#1B1F23] mb-10">
            Common Materials and Why
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.materials.map((material, idx) => (
              <div
                key={idx}
                className="bg-[#F8F6F0] p-6 border-l-4 border-[#B45309]"
              >
                <h3 className="font-display text-lg text-[#1B1F23] mb-3">
                  {material.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {material.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Industry Challenges
          </p>
          <h2 className="font-display text-4xl mb-10">
            What Procurement Has to Solve
          </h2>
          <ul className="space-y-5 max-w-4xl">
            {industry.challenges.map((challenge, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-[#B45309] font-display text-2xl flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {challenge}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">
            Standards and Codes
          </p>
          <h2 className="font-display text-4xl text-[#1B1F23] mb-10">
            Specifications We Quote To
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.standards.map((standard, idx) => (
              <div
                key={idx}
                className="bg-white p-4 border border-gray-200 text-gray-800 font-medium"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#B45309] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-4">
            Ready to Quote {industry.name}
          </h2>
          <p className="text-lg mb-8 leading-relaxed">{industry.ctaNote}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#B45309] px-8 py-4 font-medium hover:bg-gray-100 transition"
            >
              (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border border-white px-8 py-4 font-medium hover:bg-white hover:text-[#B45309] transition"
            >
              sales@texasflange.com
            </a>
          </div>
          <p className="text-sm mt-8 opacity-90">
            Texas Flange & Fitting Supply | PO Box 2889, Pearland TX 77588
          </p>
        </div>
      </section>
    </main>
  );
}
