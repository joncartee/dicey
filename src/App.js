import logo from './logo.svg';
import react from "react"
import "./App.css"
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"
import 'bootstrap/dist/css/bootstrap.min.css';





export class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      passphrase: "",
      del: "-",
      numOfWords: 3,
    }
    this.handleClick = this.handleClick.bind(this);
    this.inputWordsHandler = this.inputWordsHandler.bind(this);
    this.inputDelHandler = this.inputDelHandler.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleClick() {
    var passphrase = ""
    for (let i = 1; i <= this.state.numOfWords; i++) {
      if (i === this.state.numOfWords) {
        passphrase += list[Math.round(Math.random() * 800)]
      } else {
        passphrase += list[Math.round(Math.random() * 800)] + this.state.del
      }
    }
    console.log(passphrase)
    this.setState({ passphrase: passphrase })
  }

  inputWordsHandler(e) {
    this.setState({ numOfWords: e });
  }
  inputDelHandler(e) {
    this.setState({ del: e });
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <div className="Flexbox">
          <img src={logo} className="App-logo" id="logo" alt="logo" />

          <p >
            This page generates a diceware passphrase.
          </p>

          <div className="Flexrow">
          <h2 className="h2">Number of Words:    </h2>
              <DropdownButton
              className="left-margin-1em"
              menuAlign="left"
              title={this.state.numOfWords}
              id="dropdown-menu-align-left"
              name="numOfWords"
              onSelect={this.inputWordsHandler}
              >
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">4</Dropdown.Item>
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="6">6</Dropdown.Item>
                <Dropdown.Item eventKey="7">7</Dropdown.Item>
                <Dropdown.Item eventKey="8">8</Dropdown.Item>
                <Dropdown.Item eventKey="9">9</Dropdown.Item>
              </DropdownButton>
          </div>

          <div className="Flexrow">
                <h2>Deliminator:    </h2>
              <DropdownButton
              className="left-margin-1em "
              menuAlign="left"
              title={this.state.del}
              id="dropdown-menu-align-left"
              name="del"
              onSelect={this.inputDelHandler}
              >
                <Dropdown.Item eventKey=""></Dropdown.Item>
                <Dropdown.Item eventKey="-">-</Dropdown.Item>
                <Dropdown.Item eventKey="+">+</Dropdown.Item>
                <Dropdown.Item eventKey="*">*</Dropdown.Item>
                <Dropdown.Item eventKey="^">^</Dropdown.Item>
                <Dropdown.Item eventKey="|">|</Dropdown.Item>
                <Dropdown.Item eventKey=".">.</Dropdown.Item>
                <Dropdown.Item eventKey="@">@</Dropdown.Item>
                <Dropdown.Item eventKey=",">,</Dropdown.Item>
                <Dropdown.Item eventKey="~">~</Dropdown.Item>
                <Dropdown.Item eventKey="`">`</Dropdown.Item>
                <Dropdown.Item eventKey="=">=</Dropdown.Item>
              </DropdownButton>
              </div>
                      
         <div className="Flexrow">
          <input
          className="h1 text-white margin-top-bottom-2em"
          readOnly
          ref={(textarea) => this.textArea = textarea}
          value={this.state.passphrase}
          >
          </input>
            </div>
          <Button onClick={this.handleClick}>Generate</Button>
          <Button className="top-margin-1em" onClick={this.copyToClipboard}>Copy Passphrase</Button>
          </div>
      </header>
      </div>
    );
  }
}

export default App;
var list = [
  "abbreviate",
  "abdomen",
  "abhorrence",
  "abiding",
  "abnormal",
  "abrasion",
  "absorbing",
  "abundant",
  "abyss",
  "academy",
  "accountant",
  "acetone",
  "achiness",
  "acid",
  "acoustics",
  "acquire",
  "acrobat",
  "actress",
  "acuteness",
  "aerosol",
  "aesthetic",
  "affidavit",
  "afloat",
  "afraid",
  "aftershave",
  "again",
  "agency",
  "aggressor",
  "aghast",
  "agitate",
  "agnostic",
  "agonizing",
  "agreeing",
  "aidless",
  "aimlessly",
  "ajar",
  "alarmclock",
  "albatross",
  "alchemy",
  "alfalfa",
  "algae",
  "aliens",
  "alkaline",
  "almanac",
  "alongside",
  "alphabet",
  "already",
  "also",
  "altitude",
  "aluminum",
  "always",
  "amazingly",
  "ambulance",
  "amendment",
  "amiable",
  "ammunition",
  "amnesty",
  "amoeba",
  "amplifier",
  "amuser",
  "anagram",
  "anchor",
  "android",
  "anesthesia",
  "angelfish",
  "animal",
  "anklet",
  "announcer",
  "anonymous",
  "answer",
  "antelope",
  "anxiety",
  "anyplace",
  "aorta",
  "apartment",
  "apnea",
  "apostrophe",
  "apple",
  "apricot",
  "aquamarine",
  "arachnid",
  "arbitrate",
  "ardently",
  "arena",
  "argument",
  "aristocrat",
  "armchair",
  "aromatic",
  "arrowhead",
  "arsonist",
  "artichoke",
  "asbestos",
  "ascend",
  "aseptic",
  "ashamed",
  "asinine",
  "asleep",
  "asocial",
  "asparagus",
  "astronaut",
  "asymmetric",
  "atlas",
  "atmosphere",
  "atom",
  "atrocious",
  "attic",
  "atypical",
  "auctioneer",
  "auditorium",
  "augmented",
  "auspicious",
  "automobile",
  "auxiliary",
  "avalanche",
  "avenue",
  "aviator",
  "avocado",
  "awareness",
  "awhile",
  "awkward",
  "awning",
  "awoke",
  "axially",
  "azalea",
  "babbling",
  "backpack",
  "badass",
  "bagpipe",
  "bakery",
  "balancing",
  "bamboo",
  "banana",
  "barracuda",
  "basket",
  "bathrobe",
  "bazooka",
  "blade",
  "blender",
  "blimp",
  "blouse",
  "blurred",
  "boatyard",
  "bobcat",
  "body",
  "bogusness",
  "bohemian",
  "boiler",
  "bonnet",
  "boots",
  "borough",
  "bossiness",
  "bottle",
  "bouquet",
  "boxlike",
  "breath",
  "briefcase",
  "broom",
  "brushes",
  "bubblegum",
  "buckle",
  "buddhist",
  "buffalo",
  "bullfrog",
  "bunny",
  "busboy",
  "buzzard",
  "cabin",
  "cactus",
  "cadillac",
  "cafeteria",
  "cage",
  "cahoots",
  "cajoling",
  "cakewalk",
  "calculator",
  "camera",
  "canister",
  "capsule",
  "carrot",
  "cashew",
  "cathedral",
  "caucasian",
  "caviar",
  "ceasefire",
  "cedar",
  "celery",
  "cement",
  "census",
  "ceramics",
  "cesspool",
  "chalkboard",
  "cheesecake",
  "chimney",
  "chlorine",
  "chopsticks",
  "chrome",
  "chute",
  "cilantro",
  "cinnamon",
  "circle",
  "cityscape",
  "civilian",
  "clay",
  "clergyman",
  "clipboard",
  "clock",
  "clubhouse",
  "coathanger",
  "cobweb",
  "coconut",
  "codeword",
  "coexistent",
  "coffeecake",
  "cognitive",
  "cohabitate",
  "collarbone",
  "computer",
  "coke",
  "confetti",
  "crypt",
  "copier",
  "cornea",
  "cosmetics",
  "cotton",
  "couch",
  "coverless",
  "coyote",
  "coziness",
  "crawfish",
  "crewmember",
  "crib",
  "croissant",
  "crumble",
  "crystal",
  "cubical",
  "cucumber",
  "cuddly",
  "cufflink",
  "cuisine",
  "culprit",
  "cup",
  "curry",
  "cushion",
  "cuticle",
  "cybernetic",
  "cyclist",
  "cylinder",
  "cymbal",
  "cynicism",
  "cypress",
  "cytoplasm",
  "dachshund",
  "daffodil",
  "dagger",
  "dairy",
  "dalmatian",
  "dandelion",
  "dartboard",
  "dastardly",
  "datebook",
  "daughter",
  "dawn",
  "daytime",
  "dazzler",
  "dealer",
  "debris",
  "decal",
  "dedicate",
  "deepness",
  "defrost",
  "degree",
  "dehydrator",
  "deliverer",
  "democrat",
  "dentist",
  "deodorant",
  "depot",
  "deranged",
  "desktop",
  "detergent",
  "device",
  "dexterity",
  "diamond",
  "dibs",
  "dictionary",
  "diffuser",
  "digit",
  "dilated",
  "dimple",
  "dinnerware",
  "dioxide",
  "diploma",
  "directory",
  "dishcloth",
  "ditto",
  "dividers",
  "dizziness",
  "doctor",
  "dodge",
  "doll",
  "dominoes",
  "donut",
  "doorstep",
  "dorsal",
  "double",
  "downstairs",
  "dozed",
  "drainpipe",
  "dresser",
  "driftwood",
  "droppings",
  "drum",
  "dryer",
  "dubiously",
  "duckling",
  "duffel",
  "dugout",
  "dumpster",
  "duplex",
  "durable",
  "dustpan",
  "dutiful",
  "duvet",
  "dwarfism",
  "dwelling",
  "dwindling",
  "dynamite",
  "dyslexia",
  "eagerness",
  "earlobe",
  "easel",
  "eavesdrop",
  "ebook",
  "eccentric",
  "echoless",
  "eclipse",
  "ecosystem",
  "ecstasy",
  "edged",
  "editor",
  "educator",
  "eelworm",
  "eerie",
  "effects",
  "eggnog",
  "egomaniac",
  "ejection",
  "elastic",
  "elbow",
  "elderly",
  "elephant",
  "elfishly",
  "eliminator",
  "elk",
  "elliptical",
  "elongated",
  "elsewhere",
  "elusive",
  "elves",
  "emancipate",
  "embroidery",
  "emcee",
  "emerald",
  "emission",
  "emoticon",
  "emperor",
  "emulate",
  "enactment",
  "enchilada",
  "endorphin",
  "energy",
  "enforcer",
  "engine",
  "enhance",
  "enigmatic",
  "enjoyably",
  "enlarged",
  "enormous",
  "enquirer",
  "enrollment",
  "ensemble",
  "entryway",
  "enunciate",
  "envoy",
  "enzyme",
  "epidemic",
  "equipment",
  "erasable",
  "ergonomic",
  "erratic",
  "eruption",
  "escalator",
  "eskimo",
  "esophagus",
  "espresso",
  "essay",
  "estrogen",
  "etching",
  "eternal",
  "ethics",
  "etiquette",
  "eucalyptus",
  "eulogy",
  "euphemism",
  "euthanize",
  "evacuation",
  "evergreen",
  "evidence",
  "evolution",
  "exam",
  "excerpt",
  "exerciser",
  "exfoliate",
  "exhale",
  "exist",
  "exorcist",
  "explode",
  "exquisite",
  "exterior",
  "exuberant",
  "fabric",
  "factory",
  "faded",
  "failsafe",
  "falcon",
  "family",
  "fanfare",
  "fasten",
  "faucet",
  "favorite",
  "feasibly",
  "february",
  "federal",
  "feedback",
  "feigned",
  "feline",
  "femur",
  "fence",
  "ferret",
  "festival",
  "fettuccine",
  "feudalist",
  "feverish",
  "fiberglass",
  "fictitious",
  "fiddle",
  "figurine",
  "fillet",
  "finalist",
  "fiscally",
  "fixture",
  "flashlight",
  "fleshiness",
  "flight",
  "florist",
  "flypaper",
  "foamless",
  "focus",
  "foggy",
  "folksong",
  "fondue",
  "footpath",
  "fossil",
  "fountain",
  "fox",
  "fragment",
  "freeway",
  "fridge",
  "frosting",
  "fruit",
  "fryingpan",
  "gadget",
  "gainfully",
  "gallstone",
  "gamekeeper",
  "gangway",
  "garlic",
  "gaslight",
  "gathering",
  "gauntlet",
  "gearbox",
  "gecko",
  "gem",
  "generator",
  "geographer",
  "gerbil",
  "gesture",
  "getaway",
  "geyser",
  "ghoulishly",
  "gibberish",
  "giddiness",
  "giftshop",
  "gigabyte",
  "gimmick",
  "giraffe",
  "giveaway",
  "gizmo",
  "glasses",
  "gleeful",
  "glisten",
  "glove",
  "glucose",
  "glycerin",
  "gnarly",
  "gnomish",
  "goatskin",
  "goggles",
  "goldfish",
  "gong",
  "gooey",
  "gorgeous",
  "gosling",
  "gothic",
  "gourmet",
  "governor",
  "grape",
  "greyhound",
  "grill",
  "groundhog",
  "grumbling",
  "guacamole",
  "guerrilla",
  "guitar",
  "gullible",
  "gumdrop",
  "gurgling",
  "gusto",
  "gutless",
  "gymnast",
  "gynecology",
  "gyration",
  "habitat",
  "hacking",
  "haggard",
  "haiku",
  "halogen",
  "hamburger",
  "handgun",
  "happiness",
  "hardhat",
  "hastily",
  "hatchling",
  "haughty",
  "hazelnut",
  "headband",
  "hedgehog",
  "hefty",
  "heinously",
  "helmet",
  "hemoglobin",
  "henceforth",
  "herbs",
  "hesitation",
  "hexagon",
  "horror",
  "hubcap",
  "huddling",
  "huff",
  "hugeness",
  "hullabaloo",
  "human",
  "hunter",
  "hurricane",
  "hushing",
  "hyacinth",
  "hybrid",
  "hydrant",
  "hygienist",
  "hypnotist",
  "ibuprofen",
  "icepack",
  "icing",
  "iconic",
  "identical",
  "idiocy",
  "idly",
  "igloo",
  "ignition",
  "iguana",
  "illuminate",
  "imaging",
  "imbecile",
  "imitator",
  "immigrant",
  "imprint",
  "iodine",
  "ionosphere",
  "ipad",
  "iphone",
  "iridescent",
  "irksome",
  "iron",
  "irrigation",
  "island",
  "isotope",
  "issueless",
  "italicize",
  "itemizer",
  "itinerary",
  "itunes",
  "ivory",
  "jabbering",
  "jackrabbit",
  "jaguar",
  "jailhouse",
  "jalapeno",
  "jamboree",
  "janitor",
  "jarring",
  "jasmine",
  "jaundice",
  "jawbreaker",
  "jaywalker",
  "jazz",
  "jealous",
  "jeep",
  "jelly",
  "jersey",
  "jetski",
  "jezebel",
  "jiffy",
  "jigsaw",
  "jingling",
  "jobholder",
  "jockstrap",
  "jogging",
  "john",
  "joinable",
  "jokingly",
  "journal",
  "jovial",
  "joystick",
  "jubilant",
  "judiciary",
  "juggle",
  "juice",
  "jujitsu",
  "jukebox",
  "jumpiness",
  "junkyard",
  "juror",
  "justifying",
  "juvenile",
  "kabob",
  "kamikaze",
  "kangaroo",
  "karate",
  "kayak",
  "keepsake",
  "kennel",
  "kerosene",
  "ketchup",
  "khaki",
  "kickstand",
  "kilogram",
  "kimono",
  "kingdom",
  "kiosk",
  "kissing",
  "kite",
  "kleenex",
  "knapsack",
  "kneecap",
  "knickers",
  "koala",
  "krypton",
  "laboratory",
  "ladder",
  "lakefront",
  "lantern",
  "laptop",
  "lasagna",
  "latch",
  "laundry",
  "lavender",
  "laxative",
  "lazybones",
  "lecturer",
  "leftover",
  "leggings",
  "leisure",
  "lemon",
  "length",
  "leopard",
  "leprechaun",
  "lettuce",
  "leukemia",
  "levers",
  "lewdness",
  "library",
  "licorice",
  "lifeboat",
  "lightbulb",
  "likewise",
  "lilac",
  "limousine",
  "lint",
  "lioness",
  "lipstick",
  "liquid",
  "listless",
  "litter",
  "liverwurst",
  "lizard",
  "llama",
  "luau",
  "lubricant",
  "lucidity",
  "ludicrous",
  "luggage",
  "lukewarm",
  "lullaby",
  "lumberjack",
  "lunchbox",
  "luridness",
  "luscious",
  "luxurious",
  "lyrics",
  "macaroni",
  "maestro",
  "magazine",
  "mahogany",
  "maimed",
  "majority",
  "makeover",
  "malformed",
  "mammal",
  "mango",
  "mapmaker",
  "marbles",
  "massager",
  "matchstick",
  "maverick",
  "maximum",
  "mayonnaise",
  "moaning",
  "mobilize",
  "moccasin",
  "modify",
  "moisture",
  "molecule",
  "momentum",
  "monastery",
  "moonshine",
  "mortuary",
  "mosquito",
  "motorcycle",
  "mousetrap",
  "movie",
  "mower",
  "mozzarella",
  "muckiness",
  "mudflow",
  "mugshot",
  "mule",
  "mummy",
  "mundane",
  "muppet",
  "mural",
  "mustard",
  "mutation",
  "myriad",
  "myspace",
  "myth",
  "nail",
  "namesake",
  "nanosecond",
  "napkin",
  "narrator",
  "nastiness",
  "natives",
  "nautically",
  "navigate",
  "nearest",
  "nebula",
  "nectar",
  "nefarious",
  "negotiator",
  "neither",
  "nemesis",
  "neoliberal",
  "nephew",
  "nervously",
  "nest",
  "netting",
  "neuron",
  "nevermore",
  "nextdoor",
  "nicotine",
  "niece",
  "nimbleness",
  "nintendo",
  "nirvana",
  "nuclear",
  "nugget",
  "nuisance",
  "nullify",
  "numbing",
  "nuptials"
]