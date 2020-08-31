let trails = [
  {
    name: "walnut",
    shortName: "Walnut Creek",
    longName: "Walnut Creek Metropolitan Park",
    description:
      "Fast, flowy, sneaky jumps here and there! Great for all levels; watch for dogs.",
    location: "30.401091, -97.683966",
    opened: false,
  },
  {
    name: "brushy",
    shortName: "Brushy Creek",
    longName: "Brushy Creek Trails",
    description:
      "Technical in places and flowy in others, choose your own adventure and easy access to trails along the paved jogging path.",
    location: "30.508830, -97.772637",
    opened: false,
  },
  {
    name: "bcgb",
    shortName: "Barton Creek",
    longName: "Barton Creek Greenbelt",
    description:
      "Natural limestone trail network with gnar if you look for it. Varied terrain but generally technical.",
    location: "30.264173, -97.773461",
    opened: false,
  },
  {
    name: "thumper",
    shortName: "Thumper",
    longName: "Thumper",
    description:
      "God Hates Thumper, but only at mile 65 on the Enchilada Buffet. Try riding it fresh!",
    location: "30.401309, -97.775825",
    opened: false,
  },
  {
    name: "emma long",
    shortName: "Emma Long",
    longName: "Emma Long City Park MX Trails",
    description:
      "MX trail open to MTB. A study in classic Austin limestone ledge riding.",
    location: "30.344131, -97.826607",
    opened: false,
  },
  {
    name: "satn",
    shortName: "SATN Trails",
    longName: "South Austin Trail Network",
    description: "A network of 60-80+ miles of trails spanning South Austin.",
    location: "30.228117, -97.811378",
    opened: false,
  },
  {
    name: "mckinney falls",
    shortName: "McKinney Falls",
    longName: "McKinney Falls State Park",
    description:
      "Fast, Flowy, non-technical looks in a beautiful in-city State Park.",
    location: "30.194278, -97.717216",
    opened: false,
  },
  {
    name: "bull creek",
    shortName: "Bull Creek",
    longName: "Bull Creek Greenbelt",
    description:
      "TBH we all know that this is a stand in for some 'other' trails in the area, but you didn't hear that from me.",
    location: "30.378595, -97.778720",
    opened: false,
  },
  {
    name: "cat mountain",
    shortName: "Cat Mountain",
    longName: "Cat Mountain",
    description:
      "Private Property in Austin. Get permission from Freeride512 before riding.",
    location: "30.359020, -97.780482",
    opened: false,
  },
  {
    name: "flat creek",
    shortName: "Flat Creek",
    longName: "Flat Creek Crossing Ranch",
    description:
      "Classic Central Texas technical limestoney ride with great views and good climbing. Enduro lines mixed in.",
    location: "30.280180, -98.226325",
    opened: false,
  },
  {
    name: "flat rock",
    shortName: "Flat Rock",
    longName: "Flat Rock Ranch",
    description:
      "A good mix of everything: Flow, rocky sections, lung-busting climbs, cow-poop dodging: (opinion:) one of the best mtb trails in Texas.",
    location: "30.015507, -98.870516",
    opened: false,
  },
  {
    name: "lake georgetown",
    shortName: "Lake Georgetown",
    longName: "Lake Georgetown (IMBA EPIC)",
    description:
      "'Ruthlessly Intermediate; only two rock gardens, one's 8 miles long and the other is 9 miles long' Gorgeous scenery and a relentlessly rocky ride.",
    location: "30.670084, -97.738813",
    opened: false,
  },
  {
    name: "lakeway",
    shortName: "Lakeway Trails",
    longName: "Mt. Lakeway and Canyonlands",
    description:
      "I have no idea, i heard there's a climb that's like 20 switchbacks? Send me info on these trails!",
    location: "30.349697, -97.996296",
    opened: false,
  },
  {
    name: "satn - mms",
    shortName: "SATN - Mary Moore",
    longName: "South Austin Trail Network - Mary Moore Searight Park",
    description: "Send me info on these trails!",
    location: "30.162890, -97.807883",
    opened: false,
  },
  {
    name: "muleshoe",
    shortName: "Muleshoe Bend",
    longName: "Muleshoe Bend Recreation Area",
    description:
      "MTB Project: A great intermediate ride that has a nice mix of hardpack singletrack and some fun, bumpy sections with some additional add-on sections for more advanced riders or those wanting to add more technical bits to their ride.",
    location: "30.486941, -98.098358",
    opened: false,
  },
  {
    name: "pace bend",
    shortName: "Pace Bend",
    longName: "Pace Bend Park",
    description:
      "Narrow fast single track mixed in with rocky sections makes for a fantastic trail. Wooden features for a little spice near the powerline and the lake is right there to cool off after.",
    location: "30.457993, -98.013476",
    opened: false,
  },
  {
    name: "pedernales falls",
    shortName: "Pedernales Falls",
    longName: "Pedernales Falls State Park",
    description:
      "MTB Project: Constructed mainly on a ridge line, there is little elevation change, but riding on the rock surface requires some skill and a lot of attention. ",
    location: "30.307922, -98.257437",
    opened: false,
  },
  {
    name: "reimers",
    shortName: "Reimers Ranch",
    longName: "Milton Reimers Ranch Park",
    description:
      "MTB Project: Reimer's Ranch has a combination of loops that serves a range of different skill levels from beginner and intermediate to advanced and expert.",
    location: "30.334621, -98.120194",
    opened: false,
  },
  {
    name: "reveille",
    shortName: "Reveille Peak",
    longName: "Reveille Peak Ranch",
    description:
      "MTB Project: Some of the best riding in Texas, Reveille Peak Ranch is unique in all that it offers. There's plenty of technical singletrack, gravity runs, and granite for endless grip topped off with some of the best views in the hill country.",
    location: "30.801411, -98.333972",
    opened: false,
  },
  {
    name: "rocky hill",
    shortName: "Rocky Hill",
    longName: "Rocky Hill Ranch",
    description:
      "Piney Woods an hour outside of Austin, expect rolling terrain to work your lungs and plenty of roots. Not much technical rock section despite the name.",
    location: "30.045608, -97.125363",
    opened: false,
  },
  {
    name: "satn - slaughter",
    shortName: "SATN - Slaughter",
    longName: "South Austin Trail Network - Slaughter",
    description: "Send me info on these trails!",
    location: "30.206919, -97.905445",
    opened: false,
  },
  {
    name: "spider",
    shortName: "Spider Mountain",
    longName: "Spider Mountain Bike Park",
    description:
      "Spider Mountain is Texas' only year-round, chairlift-served downhill mountain bike park located in Burnet on the shores of Lake Buchanan.",
    location: "30.839477, -98.336648",
    opened: false,
  },
  {
    name: "st eds",
    shortName: "St. Ed's",
    longName: "St. Edward's Park",
    description:
      "A rocky climb up and a somewhat sketchy descent back down. Used as 'warm up' for Thumper during the Enchilada Buffet.",
    location: "30.405203, -97.789026",
    opened: false,
  },
  {
    name: "country club",
    shortName: "Country Club",
    longName: "Country Club Creek Greenbelt",
    description:
      "'Mazed and Confused', two twisty miles of single track packed into a pocket park. Great for beginners and brushing up on cornering.",
    location: "30.220802, -97.732171",
    opened: false,
  },
  {
    name: "dana peak",
    shortName: "Dana Peak",
    longName: "Dana Peak Park",
    description:
      "This trail has a bit of everything. Mostly hard pack and a good amount of climbing.",
    location: "31.031528, -97.608321",
    opened: false,
  },
  {
    name: "cameron park",
    shortName: "Cameron Park",
    longName: "Cameron Park",
    description:
      "Basically Walnut on steroids. Max grin on your face kinda trail.",
    location: "31.583269, -97.156580",
    opened: false,
  },
  {
    name: "bluff creek",
    shortName: "Bluff Creek Ranch",
    longName: "Bluff Creek Ranch, Warda",
    description:
      "A fast fast fast trail just past Rocky Hill. Very fun, lots of cornering, not a lot of technical sections or climbing but what appears will sneak up on you a bit.",
    location: "30.058077, -96.906138",
    opened: false,
  },
];

export default trails;
