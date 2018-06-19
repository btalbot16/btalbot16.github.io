dog_facts = ["Corgi is Welsh for dwarf dog.",
              "The reason dogs curl up is because of an age-old instinct to keep themselves warm and to protect vital organs while they sleep .",
              "Dogs have wet noses because it helps to absorb scent chemicals.",
              "If you leave your dog a piece of clothing that smells like you, the scent will comfort them and it can help curb their separation anxiety.",
              "Dogs' sense of smell is 10,000 times stronger than humans'.",
              "The Norwegian Lundehund is the only dog that has six toes on each foot!",
              "A dog named Duke is the mayor of Cormorant, Minnesota.",
              "Labradors are the most popular breed in the United States.",
              "Your dog is as smart as a 2-year-old toddler.",
              "Dogs and cats both slurp water the same way.",
              "Your dog does have a sense of time — and misses you when you’re gone.",
              "Your dog’s whiskers help him “see” in the dark.",
              "Dogs only have sweat glands in their paws.",
              "On average, a dog’s mouth exerts 320 pounds of pressure.",
              "Your one year-old pup is as physically mature as a 15-year-old human.",
              "Your dog’s sense of smell is 1,000 to 10 million times better than yours.",
              "Dogs can hear 4 times as far as humans.",
              "Your dog can smell your feelings.",
              "Dogs don’t feel guilt",
              "Dogs can see in colour",
              "There are more than 150 dog breeds, divided into 8 classes: sporting, hound, working, terrier, toy, non-sporting, herding, and miscellaneous.",
              "Puppies can be adopted as early as 8 weeks of age.  Until then, they should stay with their moms and littermates.",
              "If a dog isn’t spayed or neutered, a female dog, her mate and their offspring can product 67,000 dogs in 6 years.",
              "The most successful mountain rescue dog ever was a St Bernard named Barry, who lived during the early 1800’s and saved 40 lives.",
              "Nearly all but two breeds of dogs have pink tongues: the Chow Chow and the Shar-pei both have black tongues.",
              "The Poodle haircut was originally meant to improve the dog’s swimming abilities as a retriever, with the pom-poms left in place to warm their joints.",
              "Greyhounds can reach a speed of up to 45 miles per hour.",
              "All dogs, regardless of breed, are direct descendants of wolves and technically of the same species.",
              "Dogs are capable of locating the source of a sound in 6/100ths of a second by using their swiveling ears like radar dishes."]

document.getElementById("click").onclick = function(){
  document.getElementById("dogfact").innerHTML = dog_facts[return Math.floor(Math.random() * (27 - 0 + 1)) + 0;]
}