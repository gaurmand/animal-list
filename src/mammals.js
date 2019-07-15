import PouchDB from 'pouchdb'

//Definitions of all mammal objects

//Carnivora
//Canidae
const Coyote = {
  CommonName: "Coyote",
  ScientificName: "Canis latrans",
  Status: "Least Concern",
  Range: "North America",
  Description: "The coyote, prairie wolf or brush wolf, is a canine native to North America. It is smaller than its close relative, the gray wolf, and slightly smaller than the closely related eastern wolf and red wolf. It fills much of the same ecological niche as the golden jackal does in Eurasia, though it is larger and more predatory, and is sometimes called the American jackal by zoologists."
}

const RedFox = {
  CommonName: "Red Fox",
  ScientificName: "Vulpes vulpes",
  Status: "Least Concern",
  Range: "North America, Europe, Asia",
  Description: "The red fox (Vulpes vulpes) is the largest of the true foxes and one of the most widely distributed members of the order Carnivora, being present across the entire Northern Hemisphere from the Arctic Circle to North Africa, North America and Eurasia."
}

const GrayWolf = {
  CommonName: "Gray Wolf",
  ScientificName: "Canis lupus",
  Status: "Least Concern",
  Range: "North America, Europe, Asia, Australia",
  Description: "The wolf, also known as the gray/grey wolf, timber wolf, or tundra wolf, is a canine native to the wilderness and remote areas of Eurasia and North America. It is the largest extant member of its family, with males averaging 43–45 kg (95–99 lb) and females 36–38.5 kg (79–85 lb). It is distinguished from other Canis species by its larger size and less pointed features, particularly on the ears and muzzle. Its winter fur is long and bushy and predominantly a mottled gray in color, although nearly pure white, red and brown to black also occur."
}

const Canidae = [Coyote, GrayWolf, RedFox]

//Felidae
const Bobcat = {
  CommonName: "Bobcat",
  ScientificName: "Lynx rufus",
  Status: "Least Concern",
  Range: "North America",
  Description: "The bobcat is a medium-sized North American cat that appeared during the Irvingtonian stage of around 1.8 million years ago. Containing 2 recognized subspecies, it ranges from southern Canada to central Mexico, including most of the contiguous United States. The bobcat is an adaptable predator that inhabits wooded areas, as well as semidesert, urban edge, forest edge, and swampland environments. It remains in some of its original range, but populations are vulnerable to local extinction by coyotes and domestic animals. With a gray to brown coat, whiskered face, and black-tufted ears, the bobcat resembles the other species of the midsized genus Lynx."
}

const CanadaLynx = {
  CommonName: "Canada Lynx",
  ScientificName: "Lynx canadensis",
  Status: "Least Concern",
  Range: "Canada and Alaska",
  Description: "With a dense silvery-brown coat, ruffed face and tufted ears, the Canada lynx resembles the other species of the mid-sized feline genus Lynx. It is slightly larger than the bobcat, with which it shares parts of its range, and over twice the size of the domestic cat."
}

const Cougar = {
  CommonName: "Cougar",
  ScientificName: "Puma concolor",
  Status: "Least Concern",
  Range: "North America and South America",
  Description: "The cougar, also commonly known by other names including catamount, mountain lion, panther, and puma,is a large felid of the subfamily Felinae native to the Americas. Its range, from the Canadian Yukon to the southern Andes of South America, is the widest of any large wild terrestrial mammal in the Western Hemisphere. An adaptable, generalist species, the cougar is found in most American habitat types. It is the biggest cat in North America, and the second-heaviest cat in the New World after the jaguar. Secretive and largely solitary by nature, the cougar is properly considered both nocturnal and crepuscular, although daytime sightings do occur."
}

const Felidae = [Bobcat, CanadaLynx, Cougar]

//Ursidae
const BrownBear = {
  CommonName: "Brown Bear",
  ScientificName: "Ursus arctos",
  Status: "Least Concern",
  Range: "North America and Asia",
  Description: "The brown bear is a bear that is found across much of northern Eurasia and North America. In North America, the populations of brown bears are often called grizzly bears. It is one of the largest living terrestrial members of the order Carnivora, rivaled in size only by its closest relative, the polar bear (Ursus maritimus), which is much less variable in size and slightly larger on average."
}

const AmericanBlackBear = {
  CommonName: "American Black Bear",
  ScientificName: "Ursus americanus",
  Status: "Least Concern",
  Range: "North America",
  Description: "The American black bear is a medium-sized bear native to North America. It is the continent's smallest and most widely distributed bear species. American black bears are omnivores, with their diets varying greatly depending on season and location. They typically live in largely forested areas, but do leave forests in search of food. Sometimes they become attracted to human communities because of the immediate availability of food. The American black bear is the world's most common bear species."
}
const Ursidae = [BrownBear, AmericanBlackBear]

//Mustelidae
const AmericanBadger = {
  CommonName: "American Badger",
  ScientificName: "Taxidea taxus",
  Status: "Least Concern",
  Range: "North America",
  Description: "The American badger is a North American badger, somewhat similar in appearance to the European badger, although not closely related. It is found in the western and central United States, northern Mexico, and south-central Canada to certain areas of southwestern British Columbia."
}

const Wolverine = {
  CommonName: "Wolverine",
  ScientificName: "Gulo gulo",
  Status: "Least Concern",
  Range: "North America",
  Description: "The wolverine, also referred to as the glutton, carcajou, skunk bear, or quickhatch, is the largest land-dwelling species of the family Mustelidae. It is a stocky and muscular carnivore, more closely resembling a small bear than other mustelids. A solitary animal,[2] it has a reputation for ferocity and strength out of proportion to its size, with the documented ability to kill prey many times larger than itself."
}

const SeaOtter = {
  CommonName: "Sea Otter",
  ScientificName: "Enhydra lutris",
  Status: "Endangered",
  Range: "North America",
  Description: "The sea otter is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. Adult sea otters typically weigh between 14 and 45 kg (31 and 99 lb), making them the heaviest members of the weasel family, but among the smallest marine mammals. Unlike most marine mammals, the sea otter's primary form of insulation is an exceptionally thick coat of fur, the densest in the animal kingdom. Although it can walk on land, the sea otter is capable of living exclusively in the ocean."
}

const Stoat = {
  CommonName: "Stoat",
  ScientificName: "Mustela erminea",
  Status: "Least Concern",
  Range: "North America",
  Description: "The stoat, also known as the short-tailed weasel or simply the weasel in Ireland where the least weasel does not live, is a mammal of the genus Mustela of the family Mustelidae native to Eurasia and North America, distinguished from the least weasel by its larger size and longer tail with a prominent black tip. Originally from Eurasia, it crossed into North America some 500,000 years ago, where it naturalized and joined the notably larger, closely related native long-tailed weasel."
}

const LongTailedWeasel = {
  CommonName: "Long-Tailed Weasel",
  ScientificName: "Mustela frenata",
  Status: "Least Concern",
  Range: "North America",
  Description: "The long-tailed weasel, also known as the bridled weasel or big stoat, is a species of mustelid distributed from southern Canada throughout all the United States and Mexico, southward through all of Central America and into northern South America. It is distinct from the short-tailed weasel, also known as a stoat, a close relation which originated in Eurasia and crossed into North America some half million years ago."
}
const Mustelidae = [AmericanBadger, Wolverine, SeaOtter, Stoat, LongTailedWeasel];

function addAnimal(animal) {
  animalDB.post(animal, function callback(err, result) {
    if (!err) {
      console.log('Successfully added '+ animal.CommonName);
    }
  });
}

//create new PouchDB database
export var animalDB = new PouchDB('animals');
//var remoteCouch = false;

//array of all animal objects
const animals = Canidae.concat(Felidae, Ursidae, Mustelidae);

//add all animals to animalDB
for(let animal of animals){
  addAnimal(animal)
}
