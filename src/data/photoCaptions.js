// Add an entry here for any photo you want a caption/description/date on.
// The key must exactly match the filename in src/assets/photography/.
// Photos without an entry here still display, just without text, and
// sort to the end of the gallery (alphabetically) since there's no date.
//
// `date` controls gallery ordering — newest first. Use the date the
// photo was taken (or posted, your call) in "YYYY-MM-DD" format.

const photoCaptions = {
  "__template__.jpg":{
    caption: "",
    description:
      "",
    date: "yyyy-mm-dd"
  },
  "Giant Toddler.jpg":{
    caption: "Giant Toddler",
    description:
      "A night shot of the Rainier Square Tower in downtown Seattle.  With 58 floors, this under-construction building already towers over every other building in the vicinity.  In fact, I took this picture from the 39th floor of my office building, and I still need to crane my neck up a little bit to get the full view of this building!  Not surprising considering that this is the 2nd tallest building in Seattle (that distinction belongs to the 76-story Columbia Center).",
    date: "2019-12-12"
  },
  "327pm.jpg": {
    caption: "3:27 PM",
    description:
      "For someone who was used to regular daylight in both summer and winter, experiencing sundown at 3:30 PM in Sweden was both a new and disconcerting experience.  And the sunset colors were usually out of this world!",
    date: "2007-12-19",
  },
  "ADisplayOfFreedom.jpg": {
    caption: "A display of freedom",
    description:
      "My first July 4th fireworks experience in the US, when I visited my friend in Chicago.  Taken with my first camera, which was Canon point-and-shoot.  I still can't capture a fireworks shot as good as this one even with my more expensive gear today!",
    date: "2010-07-04",
  },
  "AndMilesToGo.jpg":{
    caption: "And miles to go",
    description:
      "",
    date: "2010-04-10"
  },
   "ArmInArm.jpg":{
    caption: "Arm in Arm",
    description:
      "",
    date: "2011-09-17"
  },
   "AWitnessToTheAscendance.jpg":{
    caption: "A witness to the ascendance",
    description:
      "",
    date: "2011-06-23"
  },
   "BeautyInBoulders.jpg":{
    caption: "Beauty in boulders",
    description:
      "",
    date: "2012-04-07"
  },
   "BlownAway.jpg":{
    caption: "Blown Away",
    description:
      "",
    date: "2012-04-08"
  },
   "BreathOfFire-Full.jpg":{
    caption: "Breath of Fire",
    description:
      "",
    date: "2007-01-15"
  },
   "DeadEnd.jpg":{
    caption: "Dead End",
    description:
      "",
    date: "2010-09-05"
  },
   "Droplet-Final-2.jpg":{
    caption: "About to drop",
    description:
      "Shot just before the drop was about to, well, drop :-) My intention was to shoot the picture of a droplet when it is suspended in mid air, but I never managed it till the end :-( As a consolation,  the droplet did resemble an eye, so I did something right in this experiement :-)",
    date: "2008-08-16"
  },
   "EscapeRoute.jpg":{
    caption: "Escape Route",
    description:
      "",
    date: "2010-07-03"
  },
   "EyeOfTheDragon.jpg":{
    caption: "Eye of the dragon",
    description:
      "",
    date: "2013-08-04"
  },
   "FlyHigh.jpg":{
    caption: "Fly High",
    description:
      "",
    date: "2008-01-18"
  },
   "Godzilla.jpg":{
    caption: "Godzilla",
    description:
      "One of my favorite photos of all time for a few reasons: First, this was aboard a cruise ship to Helsinki, and the time was nearly close to midnight! I had read in the texts about the 'Land of the Midnight Sun', but to actually experience it in the middle of the sea was a fantastic experience. Second, this was one of my first innovative shots in photography, even though it happened by a happy accident.  As we were witnessing the sun sink into the horizon, I noticed this ship moving in the opposite direction. The scene was so beautiful, and all I had to do was introduce my hand as the new element into the scene. Didn't notice this at first, but later on realized that my hand looks like a monster which has just swallowed a ship :-)",
    date: "2007-07-13"
  },
   "GothamExposed.jpg":{
    caption: "Gotham Exposed",
    description:
      "",
    date: "2011-09-16"
  },
   "HawkingAway.jpg":{
    caption: "Hawking away",
    description:
      "",
    date: "2013-12-29"
  },
   "Illusions.jpg":{
    caption: "Illusions",
    description:
      "",
    date: "2010-10-29"
  },
   "Impersonator.jpg":{
    caption: "Impersonator",
    description:
      "",
    date: "2010-04-10"
  },
   "InMotion.jpg":{
    caption: "In Motion",
    description:
      "",
    date: "2009-01-12"
  },
   "Liberated.jpg":{
    caption: "Liberated",
    description:
      "",
    date: "2010-05-31"
  },
   "Medusa.jpg":{
    caption: "Medusa",
    description:
      "",
    date: "2011-09-18"
  },
   "MightyPuny.jpg":{
    caption: "MightyPuny",
    description:
      "",
    date: "2012-04-07"
  },
   "NaturesStrokeOnCanvas.jpg":{
    caption: "Nature's stroke on canvas",
    description:
      "",
    date: "2010-04-11"
  },
  "Oasis.jpg":{
    caption: "Oasis",
    description:
      "",
    date: "2009-08-01"
  },
  "ReluctantBaskers.jpg":{
    caption: "Reluctant Baskers",
    description:
      "",
    date: "2011-01-16"
  },
  "Roar.jpg":{
    caption: "Roar",
    description:
      "",
    date: "2010-10-29"
  },
  "SilentContemplation.jpg":{
    caption: "Silent Contemplation",
    description:
      "",
    date: "2011-06-23"
  },
  "Spidey!!!.jpg":{
    caption: "Spidey!!!",
    description:
      "Never seen a shy customer as Spidey over here. Had to toil hard to get a decent snap as Spidey flitted over from flower to leaf to leat to flower as I followed him with my camera. I should have clicked over 20 times over a 30 minute time span. I had to give up once Spidey had enough and dropped himself to the ground. Two photographs made the cut, and here's the winner for you :-)",
    date: "2008-07-18"
  },
  "SpringForward.jpg":{
    caption: "Spring Forward",
    description:
      "",
    date: "2010-03-18"
  },
  "SuperFull.jpg":{
    caption: "Super Full",
    description:
      "",
    date: "2011-03-18"
  },
  "TheBalancingAct.jpg":{
    caption: "The Balancing Act",
    description:
      "",
    date: "2009-01-18"
  },
  "TheCall.jpg":{
    caption: "The Call",
    description:
      "",
    date: "2010-10-29"
  },
  "TheMask.jpg":{
    caption: "The Mask",
    description:
      "",
    date: "2012-04-07"
  },
  "TimelyReflections.jpg":{
    caption: "Timely Reflections",
    description:
      "",
    date: "2009-03-18"
  },
  "Tortoise.jpg":{
    caption: "Tortoise",
    description:
      "",
    date: "2008-03-10"
  },
  "TwoTowers.jpg":{
    caption: "Two Towers",
    description:
      "",
    date: "2010-10-29"
  },
  "VaticanCity.jpg":{
    caption: "Vatican City",
    description:
      "",
    date: "2007-07-08"
  },
  "Welcome2011.jpg":{
    caption: "Welcome 2011",
    description:
      "",
    date: "2011-01-01"
  },
  "Windows.jpg":{
    caption: "Windows",
    description:
      "",
    date: "2010-05-28"
  },
  "WordsOfWisdom.jpg":{
    caption: "Words of Wisdom",
    description:
      "",
    date: "2010-04-10"
  },
  "ZoomZoom.jpg":{
    caption: "Zoom Zoom",
    description:
      "",
    date: "2010-10-29"
  },
};

export default photoCaptions;
