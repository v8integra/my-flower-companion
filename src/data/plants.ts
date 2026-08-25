export interface Plant {
  id: string;
  name: string;
  type: "flower" | "herb" | "vegetable";
  zones: number[];
  description: string;
  icon: string;
}

export interface CompanionRelation {
  plantId: string;
  companionId: string;
  benefit: string;
  benefitType: "pest-control" | "pollination" | "soil" | "growth" | "general";
}

export const PLANTS: Plant[] = [
  // Flowers
  { id: "marigold", name: "Marigold", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Deters pests and attracts pollinators", icon: "flower" },
  { id: "lavender", name: "Lavender", type: "flower", zones: [5,6,7,8,9,10], description: "Repels insects and attracts bees", icon: "flower" },
  { id: "nasturtium", name: "Nasturtium", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Trap crop for aphids, edible flowers", icon: "flower" },
  { id: "sunflower", name: "Sunflower", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Attracts pollinators, provides shade", icon: "flower" },
  { id: "borage", name: "Borage", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Deters tomato hornworm, attracts bees", icon: "flower" },
  { id: "calendula", name: "Calendula", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Repels pests, attracts beneficial insects", icon: "flower" },
  { id: "zinnia", name: "Zinnia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts butterflies and beneficial wasps", icon: "flower" },
  { id: "sweet_alyssum", name: "Sweet Alyssum", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts ground beetles, repels aphids", icon: "flower" },
  { id: "chamomile", name: "Chamomile", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Improves flavor of nearby plants", icon: "flower" },
  { id: "echinacea", name: "Echinacea", type: "flower", zones: [3,4,5,6,7,8,9], description: "Attracts pollinators, medicinal", icon: "flower" },
  { id: "cosmos", name: "Cosmos", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Attracts beneficial insects and butterflies", icon: "flower" },
  { id: "petunia", name: "Petunia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Repels aphids, beetles, and tomato hornworm", icon: "flower" },
  // Herbs
  { id: "basil", name: "Basil", type: "herb", zones: [4,5,6,7,8,9,10,11], description: "Repels flies and mosquitoes", icon: "leaf" },
  { id: "rosemary", name: "Rosemary", type: "herb", zones: [6,7,8,9,10,11], description: "Deters many insects, attracts bees", icon: "leaf" },
  { id: "mint", name: "Mint", type: "herb", zones: [3,4,5,6,7,8,9,10,11], description: "Repels aphids and ants", icon: "leaf" },
  { id: "dill", name: "Dill", type: "herb", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts beneficial insects, deters spider mites", icon: "leaf" },
  { id: "fennel", name: "Fennel", type: "herb", zones: [4,5,6,7,8,9,10,11], description: "Attracts beneficial insects (isolate, allelopathic)", icon: "leaf" },
  { id: "chives", name: "Chives", type: "herb", zones: [3,4,5,6,7,8,9,10,11], description: "Repels aphids and Japanese beetles", icon: "leaf" },
  { id: "sage", name: "Sage", type: "herb", zones: [4,5,6,7,8,9,10,11], description: "Deters cabbage moths, repels slugs", icon: "leaf" },
  { id: "thyme", name: "Thyme", type: "herb", zones: [4,5,6,7,8,9,10,11], description: "Repels cabbage worms and whiteflies", icon: "leaf" },
  // Vegetables
  { id: "tomato", name: "Tomato", type: "vegetable", zones: [3,4,5,6,7,8,9,10,11], description: "Warm-season staple", icon: "nutrition" },
  { id: "pepper", name: "Pepper", type: "vegetable", zones: [4,5,6,7,8,9,10,11], description: "Warm-season, loves heat", icon: "nutrition" },
  { id: "cucumber", name: "Cucumber", type: "vegetable", zones: [3,4,5,6,7,8,9,10,11], description: "Warm-season vine", icon: "nutrition" },
  { id: "squash", name: "Squash", type: "vegetable", zones: [3,4,5,6,7,8,9,10,11], description: "Large-leaved warm-season crop", icon: "nutrition" },
  { id: "cabbage", name: "Cabbage", type: "vegetable", zones: [2,3,4,5,6,7,8,9,10], description: "Cool-season brassica", icon: "nutrition" },
  { id: "carrot", name: "Carrot", type: "vegetable", zones: [3,4,5,6,7,8,9,10], description: "Root vegetable, cool-season", icon: "nutrition" },
  { id: "bean", name: "Bean", type: "vegetable", zones: [3,4,5,6,7,8,9,10,11], description: "Nitrogen-fixing warm-season", icon: "nutrition" },
  { id: "lettuce", name: "Lettuce", type: "vegetable", zones: [2,3,4,5,6,7,8,9,10,11], description: "Cool-season leafy green", icon: "nutrition" },
  { id: "rose", name: "Rose", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Classic garden flower", icon: "flower" },
  { id: "yarrow", name: "Yarrow", type: "flower", zones: [3,4,5,6,7,8,9], description: "Attracts ladybugs, parasitic wasps, and hoverflies", icon: "flower" },
  { id: "black_eyed_susan", name: "Black-Eyed Susan", type: "flower", zones: [3,4,5,6,7,8,9], description: "Long-blooming native pollinator magnet", icon: "flower" },
  { id: "bee_balm", name: "Bee Balm", type: "flower", zones: [3,4,5,6,7,8,9], description: "Attracts bees, butterflies, and hummingbirds", icon: "flower" },
  { id: "catmint", name: "Catmint", type: "flower", zones: [3,4,5,6,7,8], description: "Repels aphids, flea beetles, and Japanese beetles", icon: "flower" },
  { id: "salvia", name: "Salvia", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Attracts hummingbirds and pollinators, deters pests", icon: "flower" },
  { id: "snapdragon", name: "Snapdragon", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts bumblebees, cool-season bloomer", icon: "flower" },
  { id: "verbena", name: "Verbena", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts butterflies and beneficial pollinators", icon: "flower" },
  { id: "phlox", name: "Phlox", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts butterflies, moths, and hummingbirds", icon: "flower" },
  { id: "hollyhock", name: "Hollyhock", type: "flower", zones: [3,4,5,6,7,8,9], description: "Trap crop for Japanese beetles, attracts pollinators", icon: "flower" },
  { id: "morning_glory", name: "Morning Glory", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Fast climber, attracts hummingbirds and bees", icon: "flower" },
  { id: "foxglove", name: "Foxglove", type: "flower", zones: [4,5,6,7,8,9,10], description: "Attracts bumblebees, said to stimulate nearby plant growth", icon: "flower" },
  { id: "delphinium", name: "Delphinium", type: "flower", zones: [3,4,5,6,7], description: "Tall spikes attract hummingbirds and bees", icon: "flower" },
  { id: "lupine", name: "Lupine", type: "flower", zones: [3,4,5,6,7,8], description: "Nitrogen-fixing roots, attracts pollinators", icon: "flower" },
  { id: "columbine", name: "Columbine", type: "flower", zones: [3,4,5,6,7,8,9], description: "Early-season food for hummingbirds and long-tongue bees", icon: "flower" },
  { id: "dahlia", name: "Dahlia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Late-season bloom, attracts pollinators", icon: "flower" },
  { id: "pansy", name: "Pansy", type: "flower", zones: [3,4,5,6,7,8,9], description: "Cool-season, edible flowers, early pollinator food", icon: "flower" },
  { id: "lobelia", name: "Lobelia", type: "flower", zones: [2,3,4,5,6,7,8,9,10], description: "Attracts hummingbirds and repels some insects", icon: "flower" },
  { id: "dianthus", name: "Dianthus", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Fragrant, attracts butterflies and beneficial insects", icon: "flower" },
  { id: "impatiens", name: "Impatiens", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Shade-tolerant, reliable pollinator attractor", icon: "flower" },
  { id: "geranium", name: "Geranium", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Repels Japanese beetles and leafhoppers", icon: "flower" },
  { id: "lantana", name: "Lantana", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Top butterfly and hummingbird magnet", icon: "flower" },
  { id: "portulaca", name: "Portulaca", type: "flower", zones: [4,5,6,7,8,9,10,11], description: "Heat and drought tolerant, attracts pollinators", icon: "flower" },
  { id: "gaillardia", name: "Gaillardia", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Long-blooming blanket flower, attracts bees", icon: "flower" },
  { id: "coreopsis", name: "Coreopsis", type: "flower", zones: [4,5,6,7,8,9], description: "Extended bloom season, attracts beneficial insects", icon: "flower" },
  { id: "allium", name: "Ornamental Allium", type: "flower", zones: [4,5,6,7,8,9,10], description: "Repels aphids, moles, and many garden pests", icon: "flower" },
  { id: "poppy", name: "Poppy", type: "flower", zones: [3,4,5,6,7,8,9], description: "Rich in pollen, attracts bees and hoverflies", icon: "flower" },
  { id: "cleome", name: "Cleome", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Spider flower, attracts hummingbirds and repels some pests", icon: "flower" },
  { id: "liatris", name: "Liatris", type: "flower", zones: [3,4,5,6,7,8,9], description: "Attracts monarch butterflies and native bees", icon: "flower" },
  { id: "heliotrope", name: "Heliotrope", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts parasitic wasps that control garden pests", icon: "flower" },
  { id: "nicotiana", name: "Nicotiana", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Trap crop for aphids and thrips, attracts hummingbirds", icon: "flower" },
  { id: "sweet_pea", name: "Sweet Pea", type: "flower", zones: [3,4,5,6,7,8], description: "Fragrant climber, attracts pollinators", icon: "flower" },
  { id: "agastache", name: "Agastache", type: "flower", zones: [5,6,7,8,9,10], description: "Top pollinator plant, deer resistant, drought tolerant", icon: "flower" },
  { id: "amaranth", name: "Amaranth", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts beneficial insects, trap crop for aphids", icon: "flower" },
  { id: "baptisia", name: "Baptisia", type: "flower", zones: [3,4,5,6,7,8,9], description: "Nitrogen-fixing native, attracts pollinators", icon: "flower" },
  { id: "penstemon", name: "Penstemon", type: "flower", zones: [3,4,5,6,7,8,9], description: "Native beardtongue, attracts hummingbirds and native bees", icon: "flower" },
  { id: "scabiosa", name: "Scabiosa", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Pincushion flower, excellent for butterflies and bees", icon: "flower" },
  // 51 Additional Flowers — reaching 100 total
  { id: "ageratum", name: "Ageratum", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Fluffy blue blooms repel whiteflies and attract beneficials", icon: "flower" },
  { id: "anemone", name: "Anemone", type: "flower", zones: [4,5,6,7,8,9], description: "Early spring pollinator food, naturalizes well", icon: "flower" },
  { id: "astilbe", name: "Astilbe", type: "flower", zones: [3,4,5,6,7,8,9], description: "Shade-tolerant feathery plumes, attracts beneficial insects", icon: "flower" },
  { id: "babys_breath", name: "Baby's Breath", type: "flower", zones: [3,4,5,6,7,8,9], description: "Attracts beneficial wasps and hoverflies", icon: "flower" },
  { id: "bachelors_button", name: "Bachelor's Button", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Cornflower, attracts pollinators and beneficial insects", icon: "flower" },
  { id: "balloon_flower", name: "Balloon Flower", type: "flower", zones: [3,4,5,6,7,8], description: "Long-lived perennial, attracts bees", icon: "flower" },
  { id: "begonia", name: "Begonia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Shade-tolerant, provides ground cover, minimal pest issues", icon: "flower" },
  { id: "bleeding_heart", name: "Bleeding Heart", type: "flower", zones: [3,4,5,6,7,8,9], description: "Shade-loving, attracts hummingbirds in early spring", icon: "flower" },
  { id: "butterfly_bush", name: "Butterfly Bush", type: "flower", zones: [5,6,7,8,9,10], description: "Top butterfly magnet, attracts dozens of species", icon: "flower" },
  { id: "candytuft", name: "Candytuft", type: "flower", zones: [3,4,5,6,7,8,9], description: "Low-growing, attracts early pollinators and beneficial beetles", icon: "flower" },
  { id: "chrysanthemum", name: "Chrysanthemum", type: "flower", zones: [3,4,5,6,7,8,9], description: "Natural insecticide (pyrethrin), repels roaches and other pests", icon: "flower" },
  { id: "clematis", name: "Clematis", type: "flower", zones: [3,4,5,6,7,8,9], description: "Climbing vine, attracts bees and butterflies", icon: "flower" },
  { id: "clover", name: "Clover", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Nitrogen-fixing, excellent for bees and beneficial insects", icon: "flower" },
  { id: "daylily", name: "Daylily", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Hardy, attracts bees and butterflies, edible flowers", icon: "flower" },
  { id: "dusty_miller", name: "Dusty Miller", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Silver foliage deters some pests, striking contrast plant", icon: "flower" },
  { id: "fuchsia", name: "Fuchsia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts hummingbirds, great for shaded spots", icon: "flower" },
  { id: "gaura", name: "Gaura", type: "flower", zones: [5,6,7,8,9], description: "Drought-tolerant, attracts butterflies and bees", icon: "flower" },
  { id: "gladiolus", name: "Gladiolus", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Tall spikes attract hummingbirds", icon: "flower" },
  { id: "globe_thistle", name: "Globe Thistle", type: "flower", zones: [3,4,5,6,7,8], description: "Echinops, top plant for bees and butterflies", icon: "flower" },
  { id: "goldenrod", name: "Goldenrod", type: "flower", zones: [2,3,4,5,6,7,8,9], description: "Native powerhouse, feeds 100+ species of beneficial insects", icon: "flower" },
  { id: "hellebore", name: "Hellebore", type: "flower", zones: [4,5,6,7,8,9], description: "Early-season pollinator food, deer resistant", icon: "flower" },
  { id: "hibiscus", name: "Hibiscus", type: "flower", zones: [4,5,6,7,8,9,10,11], description: "Large blooms attract hummingbirds and butterflies", icon: "flower" },
  { id: "hyacinth", name: "Hyacinth", type: "flower", zones: [4,5,6,7,8,9], description: "Fragrant spring bulb, early pollinator food", icon: "flower" },
  { id: "hydrangea", name: "Hydrangea", type: "flower", zones: [3,4,5,6,7,8,9], description: "Large flower heads attract pollinators all summer", icon: "flower" },
  { id: "iris", name: "Iris", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Attracts hummingbirds and bumblebees", icon: "flower" },
  { id: "joe_pye_weed", name: "Joe Pye Weed", type: "flower", zones: [3,4,5,6,7,8,9], description: "Native, attracts monarchs and swallowtails", icon: "flower" },
  { id: "kniphofia", name: "Red Hot Poker", type: "flower", zones: [5,6,7,8,9], description: "Torch lily, top hummingbird and bee plant", icon: "flower" },
  { id: "larkspur", name: "Larkspur", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Cool-season annual, attracts hummingbirds and bees", icon: "flower" },
  { id: "lily", name: "Lily", type: "flower", zones: [3,4,5,6,7,8,9], description: "Fragrant blooms attract bees, butterflies, and hummingbirds", icon: "flower" },
  { id: "mexican_sunflower", name: "Mexican Sunflower", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Tithonia, huge butterfly and bee magnet", icon: "flower" },
  { id: "milkweed", name: "Milkweed", type: "flower", zones: [3,4,5,6,7,8,9], description: "Essential monarch butterfly host plant", icon: "flower" },
  { id: "moonflower", name: "Moonflower", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Night-blooming, attracts moths and night pollinators", icon: "flower" },
  { id: "new_england_aster", name: "New England Aster", type: "flower", zones: [3,4,5,6,7,8], description: "Fall-blooming native, vital for migrating monarchs", icon: "flower" },
  { id: "nigella", name: "Nigella", type: "flower", zones: [2,3,4,5,6,7,8,9,10,11], description: "Love-in-a-mist, attracts bees and beneficial insects", icon: "flower" },
  { id: "oxeye_daisy", name: "Oxeye Daisy", type: "flower", zones: [3,4,5,6,7,8], description: "Attracts hoverflies whose larvae prey on aphids", icon: "flower" },
  { id: "peony", name: "Peony", type: "flower", zones: [3,4,5,6,7,8], description: "Fragrant blooms attract ants and early pollinators", icon: "flower" },
  { id: "primrose", name: "Primrose", type: "flower", zones: [3,4,5,6,7,8], description: "Early spring food for queen bumblebees", icon: "flower" },
  { id: "queen_annes_lace", name: "Queen Anne's Lace", type: "flower", zones: [3,4,5,6,7,8,9], description: "Powerhouse for parasitic wasps and beneficial insects", icon: "flower" },
  { id: "russian_sage", name: "Russian Sage", type: "flower", zones: [4,5,6,7,8,9], description: "Drought-tolerant, top bee and butterfly plant", icon: "flower" },
  { id: "sedum", name: "Sedum", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Late-season bloom for bees and butterflies, drought tolerant", icon: "flower" },
  { id: "shasta_daisy", name: "Shasta Daisy", type: "flower", zones: [5,6,7,8,9], description: "Attracts beneficial hoverflies and pollinators", icon: "flower" },
  { id: "statice", name: "Statice", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Attracts butterflies and bees, excellent dried flower", icon: "flower" },
  { id: "stock", name: "Stock", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Matthiola, heavily fragrant, attracts moths and bees", icon: "flower" },
  { id: "torenia", name: "Torenia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Wishbone flower, shade-tolerant, attracts bumblebees", icon: "flower" },
  { id: "vinca", name: "Vinca", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Heat-tolerant, attracts butterflies", icon: "flower" },
  { id: "viola", name: "Viola", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Cool-season edible flower, early bee food", icon: "flower" },
  { id: "mullein", name: "Mullein", type: "flower", zones: [3,4,5,6,7,8,9], description: "Tall spike attracts bees, provides habitat for beneficial insects", icon: "flower" },
  { id: "four_oclock", name: "Four O'Clock", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Trap crop for Japanese beetles, attracts hummingbirds", icon: "flower" },
  { id: "celosia", name: "Celosia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Cockscomb, attracts bees, long season of bloom", icon: "flower" },
  { id: "nemesia", name: "Nemesia", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Cool-season annual, attracts beneficial insects", icon: "flower" },
  { id: "geum", name: "Geum", type: "flower", zones: [4,5,6,7,8,9], description: "Avens, early-season pollinator food, long blooming", icon: "flower" },
  { id: "strawberry", name: "Strawberry", type: "vegetable", zones: [3,4,5,6,7,8,9,10], description: "Fruiting ground cover", icon: "nutrition" },
  // Additional flowers
  { id: "forget_me_not", name: "Forget-Me-Not", type: "flower", zones: [3,4,5,6,7,8,9,10], description: "Attracts beneficial insects, perfect ground cover under roses", icon: "flower" },
  { id: "calibrachoa", name: "Calibrachoa", type: "flower", zones: [3,4,5,6,7,8,9,10,11], description: "Million Bells, attracts pollinators, outstanding container plant", icon: "flower" },
  { id: "ranunculus", name: "Ranunculus", type: "flower", zones: [4,5,6,7,8,9,10,11], description: "Persian Buttercup, attracts early-season bees and butterflies", icon: "flower" },
  { id: "wisteria", name: "Wisteria", type: "flower", zones: [5,6,7,8,9], description: "Fragrant climbing vine, attracts bees, fixes nitrogen", icon: "flower" },
  { id: "canna", name: "Canna Lily", type: "flower", zones: [7,8,9,10,11], description: "Tropical focal plant, attracts hummingbirds and bees", icon: "flower" },
  { id: "crocosmia", name: "Crocosmia", type: "flower", zones: [5,6,7,8,9], description: "Fiery arching stems attract hummingbirds and beneficial insects", icon: "flower" },
  { id: "calla_lily", name: "Calla Lily", type: "flower", zones: [8,9,10], description: "Elegant blooms attract pollinators, superb cut flower", icon: "flower" },
  { id: "alstroemeria", name: "Alstroemeria", type: "flower", zones: [6,7,8,9,10], description: "Peruvian Lily, long-lasting cut flower, attracts bees and butterflies", icon: "flower" },
  { id: "muscari", name: "Grape Hyacinth", type: "flower", zones: [4,5,6,7,8,9], description: "Early spring bulb, vital food for queen bumblebees emerging from winter", icon: "flower" },
  { id: "rudbeckia", name: "Rudbeckia", type: "flower", zones: [3,4,5,6,7,8,9], description: "Gloriosa Daisy, feeds bees, birds, and butterflies across zones", icon: "flower" },
  // Additional herbs
  { id: "parsley", name: "Parsley", type: "herb", zones: [4,5,6,7,8,9], description: "Host plant for swallowtail butterflies, attracts beneficial insects", icon: "leaf" },
  { id: "cilantro", name: "Cilantro", type: "herb", zones: [2,3,4,5,6,7,8,9,10,11], description: "Flowering cilantro attracts parasitic wasps and predatory insects", icon: "leaf" },
  { id: "oregano", name: "Oregano", type: "herb", zones: [4,5,6,7,8,9,10], description: "Flowering oregano is a pollinator magnet, deters many pests", icon: "leaf" },
  { id: "tarragon", name: "Tarragon", type: "herb", zones: [4,5,6,7,8], description: "Said to improve flavor of nearby vegetables and deter pests", icon: "leaf" },
  { id: "lemon_balm", name: "Lemon Balm", type: "herb", zones: [3,4,5,6,7,8,9], description: "Powerfully attracts bees, repels gnats and mosquitoes", icon: "leaf" },
  { id: "catnip", name: "Catnip", type: "herb", zones: [3,4,5,6,7,8,9], description: "Repels aphids, flea beetles, and squash bugs; attracts bees when flowering", icon: "leaf" },
  { id: "marjoram", name: "Marjoram", type: "herb", zones: [4,5,6,7,8], description: "Attracts beneficial insects, said to improve flavor of neighboring plants", icon: "leaf" },
  { id: "lemongrass", name: "Lemongrass", type: "herb", zones: [8,9,10,11], description: "Repels mosquitoes and some pests with citrus scent", icon: "leaf" },
  // Additional vegetables
  { id: "spinach", name: "Spinach", type: "vegetable", zones: [2,3,4,5,6,7,8,9], description: "Fast-growing cool-season leafy green", icon: "nutrition" },
  { id: "kale", name: "Kale", type: "vegetable", zones: [2,3,4,5,6,7,8,9], description: "Hardy frost-tolerant brassica, one of the most nutritious greens", icon: "nutrition" },
  { id: "broccoli", name: "Broccoli", type: "vegetable", zones: [2,3,4,5,6,7,8,9,10,11], description: "Cool-season brassica, highly nutritious, great for spring and fall", icon: "nutrition" },
  { id: "garlic", name: "Garlic", type: "vegetable", zones: [3,4,5,6,7,8,9], description: "Fall-planted bulb with powerful natural pest-deterrent properties", icon: "nutrition" },
  { id: "onion", name: "Onion", type: "vegetable", zones: [3,4,5,6,7,8,9], description: "Pungent scent confuses and deters many common garden pests", icon: "nutrition" },
  { id: "radish", name: "Radish", type: "vegetable", zones: [2,3,4,5,6,7,8,9,10], description: "Fast-maturing root, excellent trap crop for cabbage maggot", icon: "nutrition" },
  { id: "beet", name: "Beet", type: "vegetable", zones: [2,3,4,5,6,7,8,9,10], description: "Dual-purpose cool-season crop for roots and nutritious greens", icon: "nutrition" },
  { id: "corn", name: "Corn", type: "vegetable", zones: [3,4,5,6,7,8,9,10], description: "Tall warm-season crop, classic Three Sisters partner", icon: "nutrition" },
  { id: "potato", name: "Potato", type: "vegetable", zones: [3,4,5,6,7,8,9,10], description: "Underground tuber, cool-season staple crop", icon: "nutrition" },
  { id: "eggplant", name: "Eggplant", type: "vegetable", zones: [5,6,7,8,9,10,11], description: "Heat-loving fruiting vegetable, close relative of tomato and pepper", icon: "nutrition" },
  { id: "pea", name: "Pea", type: "vegetable", zones: [2,3,4,5,6,7,8,9], description: "Cool-season nitrogen-fixer, great for early spring planting", icon: "nutrition" },
  { id: "swiss_chard", name: "Swiss Chard", type: "vegetable", zones: [2,3,4,5,6,7,8,9,10], description: "Heat and cold tolerant leafy green with colorful stems", icon: "nutrition" },
  { id: "zucchini", name: "Zucchini", type: "vegetable", zones: [3,4,5,6,7,8,9,10,11], description: "Prolific warm-season summer squash, highly dependent on pollinators", icon: "nutrition" },
  { id: "pumpkin", name: "Pumpkin", type: "vegetable", zones: [3,4,5,6,7,8,9,10,11], description: "Large warm-season vine, requires cross-pollination", icon: "nutrition" },
  { id: "asparagus", name: "Asparagus", type: "vegetable", zones: [2,3,4,5,6,7,8,9], description: "Long-lived perennial, deters nematodes, harvested in spring", icon: "nutrition" },
];

export const COMPANION_RELATIONS: CompanionRelation[] = [
  // Marigold companions
  { plantId: "tomato", companionId: "marigold", benefit: "Marigolds repel nematodes and deter whiteflies that attack tomatoes", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "marigold", benefit: "Marigolds deter aphids and other pests from peppers", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "marigold", benefit: "Marigolds repel cucumber beetles and other pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "marigold", benefit: "Marigolds attract pollinators needed for squash fruit set", benefitType: "pollination" },
  { plantId: "bean", companionId: "marigold", benefit: "Marigolds deter Mexican bean beetles", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "marigold", benefit: "Marigolds repel aphids that commonly attack lettuce", benefitType: "pest-control" },
  { plantId: "rose", companionId: "marigold", benefit: "Marigolds deter aphids and black spot on roses", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "marigold", benefit: "Marigolds repel carrot fly and other root pests", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "marigold", benefit: "Marigolds confuse cabbage moths with their scent", benefitType: "pest-control" },

  // Lavender companions
  { plantId: "rose", companionId: "lavender", benefit: "Lavender repels aphids and attracts pollinators to roses", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "lavender", benefit: "Lavender attracts predatory insects that eat tomato pests", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "lavender", benefit: "Lavender's strong scent confuses cabbage white butterflies", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "lavender", benefit: "Lavender attracts bees to pollinate strawberry flowers", benefitType: "pollination" },

  // Nasturtium companions
  { plantId: "cucumber", companionId: "nasturtium", benefit: "Nasturtiums act as trap crops, luring aphids away from cucumbers", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "nasturtium", benefit: "Nasturtiums repel whiteflies and aphids from tomatoes", benefitType: "pest-control" },
  { plantId: "squash", companionId: "nasturtium", benefit: "Nasturtiums repel squash bugs and cucumber beetles", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "nasturtium", benefit: "Nasturtiums lure aphids away from cabbages as a trap crop", benefitType: "pest-control" },
  { plantId: "bean", companionId: "nasturtium", benefit: "Nasturtiums repel aphids and attract pollinators to beans", benefitType: "pest-control" },

  // Borage companions
  { plantId: "tomato", companionId: "borage", benefit: "Borage deters tomato hornworms and attracts pollinating bees", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "borage", benefit: "Borage strengthens strawberry plants and repels pests", benefitType: "growth" },
  { plantId: "squash", companionId: "borage", benefit: "Borage attracts bees for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "borage", benefit: "Borage repels cucumber beetles", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "borage", benefit: "Borage attracts beneficial insects and deters pests", benefitType: "pest-control" },

  // Calendula companions
  { plantId: "tomato", companionId: "calendula", benefit: "Calendula repels tomato pests and attracts beneficial predators", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "calendula", benefit: "Calendula attracts beneficial insects that prey on carrot pests", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "calendula", benefit: "Calendula repels aphids and cabbage moths", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "calendula", benefit: "Calendula attracts hoverflies that prey on aphids", benefitType: "pest-control" },

  // Sunflower companions
  { plantId: "cucumber", companionId: "sunflower", benefit: "Sunflowers attract pollinators and provide trellis support", benefitType: "pollination" },
  { plantId: "squash", companionId: "sunflower", benefit: "Sunflowers attract bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "sunflower", benefit: "Sunflowers provide structural support and attract pollinators", benefitType: "general" },
  { plantId: "lettuce", companionId: "sunflower", benefit: "Sunflowers provide afternoon shade for heat-sensitive lettuce", benefitType: "growth" },

  // Basil companions
  { plantId: "tomato", companionId: "basil", benefit: "Basil repels flies, aphids, and may improve tomato flavor", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "basil", benefit: "Basil repels aphids and spider mites from peppers", benefitType: "pest-control" },
  { plantId: "squash", companionId: "basil", benefit: "Basil deters squash bugs and aphids", benefitType: "pest-control" },

  // Chamomile companions
  { plantId: "cabbage", companionId: "chamomile", benefit: "Chamomile repels cabbage flies and cabbage moths", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "chamomile", benefit: "Chamomile attracts predatory wasps that control cucumber pests", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "chamomile", benefit: "Chamomile improves flavor of nearby plants and deters pests", benefitType: "growth" },
  { plantId: "bean", companionId: "chamomile", benefit: "Chamomile boosts growth and repels flies", benefitType: "growth" },

  // Zinnia companions
  { plantId: "tomato", companionId: "zinnia", benefit: "Zinnias attract beneficial wasps that control tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "zinnia", benefit: "Zinnias attract butterflies and bees for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "zinnia", benefit: "Zinnias attract beneficial insects to control cucumber beetles", benefitType: "pest-control" },
  { plantId: "bean", companionId: "zinnia", benefit: "Zinnias attract pollinators and beneficial predatory insects", benefitType: "pollination" },

  // Sweet Alyssum companions
  { plantId: "lettuce", companionId: "sweet_alyssum", benefit: "Sweet alyssum attracts aphid-eating hoverflies", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "sweet_alyssum", benefit: "Sweet alyssum lures beneficial beetles that prey on caterpillars", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "sweet_alyssum", benefit: "Sweet alyssum attracts pollinators for strawberry flowers", benefitType: "pollination" },
  { plantId: "carrot", companionId: "sweet_alyssum", benefit: "Sweet alyssum attracts parasitic wasps that target carrot pests", benefitType: "pest-control" },

  // Petunia companions
  { plantId: "tomato", companionId: "petunia", benefit: "Petunias repel tomato hornworm and asparagus beetles", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "petunia", benefit: "Petunias repel aphids and leafhoppers from peppers", benefitType: "pest-control" },
  { plantId: "bean", companionId: "petunia", benefit: "Petunias deter bean beetles and aphids", benefitType: "pest-control" },
  { plantId: "squash", companionId: "petunia", benefit: "Petunias attract pollinators and repel squash pests", benefitType: "pest-control" },

  // Cosmos companions
  { plantId: "tomato", companionId: "cosmos", benefit: "Cosmos attracts parasitic wasps that control tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "cosmos", benefit: "Cosmos attracts bees and butterflies for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "cosmos", benefit: "Cosmos attracts beneficial insects that prey on bean pests", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "cosmos", benefit: "Cosmos attracts predatory insects to control cucumber beetles", benefitType: "pest-control" },

  // Chives companions
  { plantId: "carrot", companionId: "chives", benefit: "Chives repel carrot fly and improve carrot growth", benefitType: "pest-control" },
  { plantId: "rose", companionId: "chives", benefit: "Chives repel aphids and black spot fungus from roses", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "chives", benefit: "Chives deter aphids and may improve tomato flavor", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "chives", benefit: "Chives repel aphids from cucumbers", benefitType: "pest-control" },

  // Mint companions
  { plantId: "cabbage", companionId: "mint", benefit: "Mint repels aphids and cabbage moths from brassicas", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "mint", benefit: "Mint deters aphids, flea beetles and spider mites", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "mint", benefit: "Mint's strong scent confuses and repels many pepper pests", benefitType: "pest-control" },

  // Dill companions
  { plantId: "cucumber", companionId: "dill", benefit: "Dill attracts predatory insects that control cucumber beetles", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "dill", benefit: "Dill attracts wasps and other beneficials for cabbage protection", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "dill", benefit: "Dill attracts beneficial insects and repels aphids", benefitType: "pest-control" },

  // Rosemary companions
  { plantId: "cabbage", companionId: "rosemary", benefit: "Rosemary deters cabbage moths and carrot flies", benefitType: "pest-control" },
  { plantId: "bean", companionId: "rosemary", benefit: "Rosemary deters bean beetles with its strong scent", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "rosemary", benefit: "Rosemary repels carrot flies and other pests", benefitType: "pest-control" },

  // Echinacea companions
  { plantId: "tomato", companionId: "echinacea", benefit: "Echinacea attracts pollinators and beneficial predatory insects", benefitType: "pollination" },
  { plantId: "squash", companionId: "echinacea", benefit: "Echinacea brings bees and butterflies for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "echinacea", benefit: "Echinacea attracts bees to boost bean pollination", benefitType: "pollination" },

  // Sage companions
  { plantId: "cabbage", companionId: "sage", benefit: "Sage deters cabbage moths and white butterflies", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "sage", benefit: "Sage repels carrot fly with its aromatic oils", benefitType: "pest-control" },
  { plantId: "bean", companionId: "sage", benefit: "Sage deters bean beetles and other pests", benefitType: "pest-control" },

  // Thyme companions
  { plantId: "cabbage", companionId: "thyme", benefit: "Thyme repels cabbage worms and whiteflies", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "thyme", benefit: "Thyme repels worms and attracts pollinators for strawberries", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "thyme", benefit: "Thyme deters whiteflies and other tomato pests", benefitType: "pest-control" },

  // Yarrow companions
  { plantId: "tomato", companionId: "yarrow", benefit: "Yarrow attracts ladybugs and parasitic wasps that control tomato pests", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "yarrow", benefit: "Yarrow draws hoverflies whose larvae prey on carrot aphids", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "yarrow", benefit: "Yarrow draws predatory insects to control cucumber pests", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "yarrow", benefit: "Yarrow attracts parasitic wasps that prey on cabbage caterpillars", benefitType: "pest-control" },
  { plantId: "bean", companionId: "yarrow", benefit: "Yarrow improves soil and attracts beneficial insects for beans", benefitType: "general" },
  { plantId: "lettuce", companionId: "yarrow", benefit: "Yarrow attracts hoverflies that prey on aphids attacking lettuce", benefitType: "pest-control" },
  { plantId: "squash", companionId: "yarrow", benefit: "Yarrow attracts predatory insects and pollinators for squash", benefitType: "pollination" },

  // Black-Eyed Susan companions
  { plantId: "squash", companionId: "black_eyed_susan", benefit: "Black-eyed Susan attracts bees and butterflies for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "black_eyed_susan", benefit: "Black-eyed Susan attracts beneficial predatory insects to cucumber beds", benefitType: "pest-control" },
  { plantId: "bean", companionId: "black_eyed_susan", benefit: "Black-eyed Susan attracts pollinators and beneficial insects for beans", benefitType: "pollination" },
  { plantId: "tomato", companionId: "black_eyed_susan", benefit: "Black-eyed Susan attracts parasitic wasps that control tomato pests", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "black_eyed_susan", benefit: "Black-eyed Susan draws bees that boost pepper fruit set", benefitType: "pollination" },

  // Bee Balm companions
  { plantId: "tomato", companionId: "bee_balm", benefit: "Bee balm attracts pollinators and repels pests with aromatic oils", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "bee_balm", benefit: "Bee balm brings bees that boost pepper pollination and fruit set", benefitType: "pollination" },
  { plantId: "squash", companionId: "bee_balm", benefit: "Bee balm brings hummingbirds and bees for superior squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "bee_balm", benefit: "Bee balm attracts bumblebees that improve bean yield", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "bee_balm", benefit: "Bee balm's fragrance deters pests and attracts pollinators for cucumbers", benefitType: "pest-control" },

  // Catmint companions
  { plantId: "tomato", companionId: "catmint", benefit: "Catmint repels aphids, flea beetles, and spider mites from tomatoes", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "catmint", benefit: "Catmint deters aphids and leafhoppers from peppers", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "catmint", benefit: "Catmint repels flea beetles and cabbage moths from brassicas", benefitType: "pest-control" },
  { plantId: "bean", companionId: "catmint", benefit: "Catmint repels aphids and attracts beneficial insects for beans", benefitType: "pest-control" },
  { plantId: "rose", companionId: "catmint", benefit: "Catmint repels aphids and Japanese beetles from roses", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "catmint", benefit: "Catmint's strong scent deters cucumber beetles and aphids", benefitType: "pest-control" },

  // Salvia companions
  { plantId: "tomato", companionId: "salvia", benefit: "Salvia attracts beneficial insects and deters tomato pests", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "salvia", benefit: "Salvia deters cabbage moths and white butterflies", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "salvia", benefit: "Salvia's strong fragrance repels carrot fly", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "salvia", benefit: "Salvia attracts pollinators for strawberry flowers", benefitType: "pollination" },
  { plantId: "bean", companionId: "salvia", benefit: "Salvia attracts pollinators that improve bean yield", benefitType: "pollination" },
  { plantId: "squash", companionId: "salvia", benefit: "Salvia brings hummingbirds and bees for squash pollination", benefitType: "pollination" },

  // Snapdragon companions
  { plantId: "tomato", companionId: "snapdragon", benefit: "Snapdragons attract bumblebees that improve tomato fruit set", benefitType: "pollination" },
  { plantId: "pepper", companionId: "snapdragon", benefit: "Snapdragons attract pollinators for better pepper production", benefitType: "pollination" },
  { plantId: "squash", companionId: "snapdragon", benefit: "Snapdragons attract bumblebees essential for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "snapdragon", benefit: "Snapdragons attract beneficial insects and pollinators to cucumber beds", benefitType: "pollination" },
  { plantId: "carrot", companionId: "snapdragon", benefit: "Snapdragons attract beneficial insects that prey on carrot pests", benefitType: "pest-control" },

  // Verbena companions
  { plantId: "squash", companionId: "verbena", benefit: "Verbena attracts butterflies and bees for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "verbena", benefit: "Verbena attracts beneficial insects to control cucumber pests", benefitType: "pest-control" },
  { plantId: "bean", companionId: "verbena", benefit: "Verbena attracts pollinators that improve bean yield", benefitType: "pollination" },
  { plantId: "tomato", companionId: "verbena", benefit: "Verbena attracts predatory insects near tomatoes", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "verbena", benefit: "Verbena draws butterflies and bees for pepper pollination", benefitType: "pollination" },

  // Phlox companions
  { plantId: "squash", companionId: "phlox", benefit: "Phlox attracts butterflies and moths that pollinate squash", benefitType: "pollination" },
  { plantId: "bean", companionId: "phlox", benefit: "Phlox brings pollinators to improve bean pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "phlox", benefit: "Phlox attracts beneficial insects to the cucumber bed", benefitType: "pollination" },
  { plantId: "strawberry", companionId: "phlox", benefit: "Phlox attracts early pollinators for strawberry flowers", benefitType: "pollination" },
  { plantId: "carrot", companionId: "phlox", benefit: "Phlox attracts beneficial insects that prey on carrot pests", benefitType: "general" },

  // Hollyhock companions
  { plantId: "rose", companionId: "hollyhock", benefit: "Hollyhocks act as a trap crop for Japanese beetles, protecting roses", benefitType: "pest-control" },
  { plantId: "squash", companionId: "hollyhock", benefit: "Hollyhocks attract hummingbirds and bees for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "hollyhock", benefit: "Hollyhocks attract pollinators to improve cucumber fruit set", benefitType: "pollination" },
  { plantId: "bean", companionId: "hollyhock", benefit: "Hollyhocks attract hummingbirds and bees to the bean garden", benefitType: "pollination" },

  // Morning Glory companions
  { plantId: "squash", companionId: "morning_glory", benefit: "Morning glories attract hummingbirds and bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "morning_glory", benefit: "Morning glories attract pollinators and share climbing space with beans", benefitType: "pollination" },
  { plantId: "tomato", companionId: "morning_glory", benefit: "Morning glories attract beneficial insects to the tomato bed", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "morning_glory", benefit: "Morning glories attract pollinators and can trellis alongside cucumbers", benefitType: "pollination" },

  // Foxglove companions
  { plantId: "tomato", companionId: "foxglove", benefit: "Foxglove attracts bumblebees and may stimulate nearby plant growth", benefitType: "growth" },
  { plantId: "squash", companionId: "foxglove", benefit: "Foxglove attracts bumblebees essential for squash pollination", benefitType: "pollination" },
  { plantId: "strawberry", companionId: "foxglove", benefit: "Foxglove brings bumblebees to pollinate strawberry flowers", benefitType: "pollination" },
  { plantId: "bean", companionId: "foxglove", benefit: "Foxglove attracts pollinators and may stimulate bean growth", benefitType: "growth" },
  { plantId: "pepper", companionId: "foxglove", benefit: "Foxglove brings bumblebees that improve pepper pollination", benefitType: "pollination" },

  // Delphinium companions
  { plantId: "squash", companionId: "delphinium", benefit: "Delphiniums attract hummingbirds and bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "delphinium", benefit: "Delphiniums bring hummingbirds and bumblebees to the garden", benefitType: "pollination" },
  { plantId: "strawberry", companionId: "delphinium", benefit: "Delphiniums attract early pollinators for strawberry blooms", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "delphinium", benefit: "Delphiniums attract hummingbirds that also pollinate cucumbers", benefitType: "pollination" },

  // Lupine companions
  { plantId: "carrot", companionId: "lupine", benefit: "Lupines fix nitrogen and attract pollinators beneficial to carrots", benefitType: "soil" },
  { plantId: "squash", companionId: "lupine", benefit: "Lupines enrich soil nitrogen and attract pollinators for squash", benefitType: "soil" },
  { plantId: "cucumber", companionId: "lupine", benefit: "Lupines fix nitrogen and attract beneficial insects for cucumbers", benefitType: "soil" },
  { plantId: "cabbage", companionId: "lupine", benefit: "Lupines improve soil fertility around brassicas", benefitType: "soil" },
  { plantId: "bean", companionId: "lupine", benefit: "Lupines and beans together fix nitrogen and share pollinators", benefitType: "soil" },
  { plantId: "lettuce", companionId: "lupine", benefit: "Lupines fix nitrogen that feeds leafy green lettuce", benefitType: "soil" },

  // Columbine companions
  { plantId: "cabbage", companionId: "columbine", benefit: "Columbine attracts early-season pollinators and beneficial insects near cabbage", benefitType: "general" },
  { plantId: "lettuce", companionId: "columbine", benefit: "Columbine attracts beneficial insects to leafy green beds", benefitType: "general" },
  { plantId: "strawberry", companionId: "columbine", benefit: "Columbine attracts hummingbirds that also pollinate strawberries", benefitType: "pollination" },
  { plantId: "carrot", companionId: "columbine", benefit: "Columbine brings early-season beneficial insects to the carrot bed", benefitType: "general" },
  { plantId: "bean", companionId: "columbine", benefit: "Columbine provides early-season pollinator food before beans flower", benefitType: "pollination" },

  // Dahlia companions
  { plantId: "tomato", companionId: "dahlia", benefit: "Dahlias attract pollinators and repel some soil nematodes", benefitType: "pest-control" },
  { plantId: "squash", companionId: "dahlia", benefit: "Dahlias attract bees and butterflies for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "dahlia", benefit: "Dahlias attract late-season pollinators that also visit bean flowers", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "dahlia", benefit: "Dahlias attract beneficial insects to cucumber beds", benefitType: "pollination" },
  { plantId: "pepper", companionId: "dahlia", benefit: "Dahlias attract butterflies and bees for pepper pollination", benefitType: "pollination" },

  // Pansy companions
  { plantId: "cabbage", companionId: "pansy", benefit: "Pansies attract beneficial insects and confuse cabbage pests", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "pansy", benefit: "Pansies and lettuce share cool-season timing and attract shared beneficial insects", benefitType: "general" },
  { plantId: "carrot", companionId: "pansy", benefit: "Pansies attract early-season beneficial insects to carrot beds", benefitType: "general" },
  { plantId: "strawberry", companionId: "pansy", benefit: "Pansies attract early pollinators for spring strawberry blooms", benefitType: "pollination" },

  // Lobelia companions
  { plantId: "tomato", companionId: "lobelia", benefit: "Lobelia attracts hummingbirds and may deter some insects from tomatoes", benefitType: "pest-control" },
  { plantId: "bean", companionId: "lobelia", benefit: "Lobelia attracts hummingbirds that pollinate nearby bean plants", benefitType: "pollination" },
  { plantId: "squash", companionId: "lobelia", benefit: "Lobelia attracts hummingbirds that also visit squash flowers", benefitType: "pollination" },
  { plantId: "cabbage", companionId: "lobelia", benefit: "Lobelia may repel some insects from cabbage plantings", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "lobelia", benefit: "Lobelia brings hummingbirds and bees to the cucumber garden", benefitType: "pollination" },

  // Dianthus companions
  { plantId: "cabbage", companionId: "dianthus", benefit: "Dianthus attracts butterflies and beneficial insects to brassica beds", benefitType: "general" },
  { plantId: "carrot", companionId: "dianthus", benefit: "Dianthus brings pollinators and beneficial insects to the carrot bed", benefitType: "general" },
  { plantId: "tomato", companionId: "dianthus", benefit: "Dianthus attracts pollinators and beneficial predators near tomatoes", benefitType: "general" },
  { plantId: "strawberry", companionId: "dianthus", benefit: "Dianthus attracts pollinators for strawberry flowers", benefitType: "pollination" },
  { plantId: "lettuce", companionId: "dianthus", benefit: "Dianthus attracts beneficial insects and shares cool-season timing with lettuce", benefitType: "general" },

  // Geranium companions
  { plantId: "rose", companionId: "geranium", benefit: "Geraniums repel Japanese beetles that damage roses", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "geranium", benefit: "Geraniums repel leafhoppers and other tomato pests", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "geranium", benefit: "Geraniums deter leafhoppers from pepper plants", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "geranium", benefit: "Geraniums confuse and repel cabbage worms and loopers", benefitType: "pest-control" },
  { plantId: "bean", companionId: "geranium", benefit: "Geraniums repel Japanese bean beetles and leafhoppers", benefitType: "pest-control" },

  // Lantana companions
  { plantId: "tomato", companionId: "lantana", benefit: "Lantana attracts butterflies and repels some pest insects near tomatoes", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "lantana", benefit: "Lantana draws pollinators and beneficial predators to pepper plants", benefitType: "pollination" },
  { plantId: "squash", companionId: "lantana", benefit: "Lantana is a top butterfly and bee magnet for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "lantana", benefit: "Lantana attracts butterflies and bees for cucumber pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "lantana", benefit: "Lantana draws pollinators and beneficial insects to bean plants", benefitType: "pollination" },

  // Portulaca companions
  { plantId: "squash", companionId: "portulaca", benefit: "Portulaca attracts pollinators and covers ground in sunny squash beds", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "portulaca", benefit: "Portulaca fills ground space and attracts pollinators for cucumbers", benefitType: "pollination" },
  { plantId: "pepper", companionId: "portulaca", benefit: "Portulaca attracts pollinators and thrives in same hot, sunny conditions", benefitType: "pollination" },
  { plantId: "tomato", companionId: "portulaca", benefit: "Portulaca fills gaps around tomatoes and attracts pollinators", benefitType: "pollination" },

  // Gaillardia companions
  { plantId: "squash", companionId: "gaillardia", benefit: "Gaillardia attracts bees and butterflies for extended squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "gaillardia", benefit: "Gaillardia attracts beneficial insects and pollinators for beans", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "gaillardia", benefit: "Gaillardia attracts predatory insects that control cucumber pests", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "gaillardia", benefit: "Gaillardia's long bloom keeps beneficial insects near tomatoes all season", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "gaillardia", benefit: "Gaillardia brings bees and butterflies for pepper pollination", benefitType: "pollination" },

  // Coreopsis companions
  { plantId: "tomato", companionId: "coreopsis", benefit: "Coreopsis attracts beneficial predatory insects near tomatoes", benefitType: "pest-control" },
  { plantId: "squash", companionId: "coreopsis", benefit: "Coreopsis provides a long season of pollinator attraction for squash", benefitType: "pollination" },
  { plantId: "bean", companionId: "coreopsis", benefit: "Coreopsis attracts beneficial insects and pollinators for beans", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "coreopsis", benefit: "Coreopsis draws beneficial predators to control cucumber beetles", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "coreopsis", benefit: "Coreopsis attracts hoverflies whose larvae prey on carrot aphids", benefitType: "pest-control" },

  // Ornamental Allium companions
  { plantId: "rose", companionId: "allium", benefit: "Ornamental alliums repel aphids and help prevent black spot on roses", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "allium", benefit: "Alliums repel aphids, spider mites, and other tomato pests", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "allium", benefit: "Alliums repel carrot fly with their pungent scent", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "allium", benefit: "Alliums confuse and repel aphids and cabbage moths", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "allium", benefit: "Alliums deter slugs and aphids that attack strawberries", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "allium", benefit: "Alliums repel aphids and slugs that damage lettuce", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "allium", benefit: "Alliums repel aphids and other pests from pepper plants", benefitType: "pest-control" },

  // Poppy companions
  { plantId: "tomato", companionId: "poppy", benefit: "Poppies attract bees and hoverflies to tomato beds", benefitType: "pollination" },
  { plantId: "bean", companionId: "poppy", benefit: "Poppies attract early-season bees for bean pollination", benefitType: "pollination" },
  { plantId: "squash", companionId: "poppy", benefit: "Poppies attract bees and hoverflies that also pollinate squash", benefitType: "pollination" },
  { plantId: "lettuce", companionId: "poppy", benefit: "Poppies attract beneficial hoverflies near lettuce and share cool-season timing", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "poppy", benefit: "Poppies attract beneficial insects that prey on carrot pests", benefitType: "general" },

  // Cleome companions
  { plantId: "tomato", companionId: "cleome", benefit: "Cleome attracts hummingbirds and repels some tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "cleome", benefit: "Cleome attracts hummingbirds and bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "cleome", benefit: "Cleome attracts pollinators and may deter some bean pests", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "cleome", benefit: "Cleome attracts beneficial insects and pollinators to cucumber beds", benefitType: "pollination" },
  { plantId: "pepper", companionId: "cleome", benefit: "Cleome brings hummingbirds and bees for pepper pollination", benefitType: "pollination" },

  // Liatris companions
  { plantId: "squash", companionId: "liatris", benefit: "Liatris attracts monarch butterflies and native bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "liatris", benefit: "Liatris draws hummingbirds and butterflies that boost bean pollination", benefitType: "pollination" },
  { plantId: "tomato", companionId: "liatris", benefit: "Liatris attracts beneficial insects and pollinators near tomatoes", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "liatris", benefit: "Liatris brings butterflies and bees to cucumber flowers", benefitType: "pollination" },

  // Heliotrope companions
  { plantId: "tomato", companionId: "heliotrope", benefit: "Heliotrope attracts parasitic wasps that control tomato hornworm", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "heliotrope", benefit: "Heliotrope draws parasitic wasps that prey on cucumber pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "heliotrope", benefit: "Heliotrope attracts beneficial predatory insects near squash", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "heliotrope", benefit: "Heliotrope attracts parasitic wasps that control carrot pests", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "heliotrope", benefit: "Heliotrope draws parasitic wasps that attack cabbage caterpillars", benefitType: "pest-control" },

  // Nicotiana companions
  { plantId: "tomato", companionId: "nicotiana", benefit: "Nicotiana acts as a trap crop, luring aphids and thrips away from tomatoes", benefitType: "pest-control" },
  { plantId: "squash", companionId: "nicotiana", benefit: "Nicotiana attracts hummingbirds that also pollinate squash", benefitType: "pollination" },
  { plantId: "pepper", companionId: "nicotiana", benefit: "Nicotiana acts as a trap crop, luring aphids away from peppers", benefitType: "pest-control" },
  { plantId: "bean", companionId: "nicotiana", benefit: "Nicotiana attracts hummingbirds and pollinators for beans", benefitType: "pollination" },

  // Sweet Pea companions
  { plantId: "bean", companionId: "sweet_pea", benefit: "Sweet peas and beans attract shared pollinators and both contribute nitrogen", benefitType: "soil" },
  { plantId: "cucumber", companionId: "sweet_pea", benefit: "Sweet peas attract pollinators and can trellis near cucumbers", benefitType: "pollination" },
  { plantId: "squash", companionId: "sweet_pea", benefit: "Sweet peas attract bees and butterflies for squash pollination", benefitType: "pollination" },
  { plantId: "lettuce", companionId: "sweet_pea", benefit: "Sweet peas attract beneficial insects and share cool-season timing with lettuce", benefitType: "general" },
  { plantId: "carrot", companionId: "sweet_pea", benefit: "Sweet peas attract beneficial insects to the carrot bed", benefitType: "general" },

  // Agastache companions
  { plantId: "tomato", companionId: "agastache", benefit: "Agastache is a top pollinator plant and deters some tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "agastache", benefit: "Agastache attracts bees and hummingbirds for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "agastache", benefit: "Agastache draws hummingbirds and bees that improve bean yield", benefitType: "pollination" },
  { plantId: "pepper", companionId: "agastache", benefit: "Agastache attracts pollinators for better pepper production", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "agastache", benefit: "Agastache brings bees and beneficial insects to cucumber plants", benefitType: "pollination" },
  { plantId: "strawberry", companionId: "agastache", benefit: "Agastache attracts bees and hummingbirds for strawberry pollination", benefitType: "pollination" },

  // Amaranth companions
  { plantId: "tomato", companionId: "amaranth", benefit: "Amaranth acts as a trap crop for aphids, luring them away from tomatoes", benefitType: "pest-control" },
  { plantId: "squash", companionId: "amaranth", benefit: "Amaranth attracts beneficial insects and provides habitat diversity near squash", benefitType: "general" },
  { plantId: "bean", companionId: "amaranth", benefit: "Amaranth and beans form a classic companion planting combination", benefitType: "growth" },
  { plantId: "cucumber", companionId: "amaranth", benefit: "Amaranth attracts predatory insects that control cucumber pests", benefitType: "pest-control" },
  { plantId: "corn", companionId: "amaranth", benefit: "Amaranth fixes nitrogen and attracts beneficial insects near corn", benefitType: "soil" },
  { plantId: "pepper", companionId: "amaranth", benefit: "Amaranth serves as a trap crop and attracts beneficial insects near peppers", benefitType: "pest-control" },

  // Baptisia companions
  { plantId: "squash", companionId: "baptisia", benefit: "Baptisia fixes nitrogen and attracts pollinators for squash", benefitType: "soil" },
  { plantId: "bean", companionId: "baptisia", benefit: "Baptisia and beans together enrich soil nitrogen for surrounding plants", benefitType: "soil" },
  { plantId: "cucumber", companionId: "baptisia", benefit: "Baptisia fixes nitrogen and attracts beneficial insects for cucumbers", benefitType: "soil" },
  { plantId: "carrot", companionId: "baptisia", benefit: "Baptisia improves soil nitrogen levels near carrots", benefitType: "soil" },
  { plantId: "cabbage", companionId: "baptisia", benefit: "Baptisia enriches soil and attracts beneficial insects near brassicas", benefitType: "soil" },

  // Penstemon companions
  { plantId: "squash", companionId: "penstemon", benefit: "Penstemon attracts hummingbirds and native bees for squash pollination", benefitType: "pollination" },
  { plantId: "tomato", companionId: "penstemon", benefit: "Penstemon brings hummingbirds and native bees to the tomato garden", benefitType: "pollination" },
  { plantId: "bean", companionId: "penstemon", benefit: "Penstemon attracts hummingbirds that also visit bean flowers", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "penstemon", benefit: "Penstemon brings native bees that improve cucumber pollination", benefitType: "pollination" },
  { plantId: "pepper", companionId: "penstemon", benefit: "Penstemon attracts hummingbirds and native bees for pepper production", benefitType: "pollination" },

  // Scabiosa companions
  { plantId: "squash", companionId: "scabiosa", benefit: "Scabiosa attracts butterflies and bees for squash pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "scabiosa", benefit: "Scabiosa draws pollinators and beneficial insects to cucumber beds", benefitType: "pollination" },
  { plantId: "bean", companionId: "scabiosa", benefit: "Scabiosa attracts butterflies that also pollinate bean flowers", benefitType: "pollination" },
  { plantId: "tomato", companionId: "scabiosa", benefit: "Scabiosa attracts parasitic wasps that help control tomato pests", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "scabiosa", benefit: "Scabiosa attracts beneficial hoverflies that prey on carrot aphids", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "scabiosa", benefit: "Scabiosa attracts butterflies and bees for strawberry pollination", benefitType: "pollination" },

  // Ageratum companions
  { plantId: "tomato", companionId: "ageratum", benefit: "Ageratum repels whiteflies and attracts beneficial insects near tomatoes", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "ageratum", benefit: "Ageratum's scent deters pests from peppers", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "ageratum", benefit: "Ageratum repels whiteflies from brassicas", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "ageratum", benefit: "Ageratum attracts beneficial insects to cucumber beds", benefitType: "pest-control" },

  // Bachelor's Button companions
  { plantId: "tomato", companionId: "bachelors_button", benefit: "Bachelor's button attracts parasitic wasps that control tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "bachelors_button", benefit: "Bachelor's button attracts bees and butterflies for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "bachelors_button", benefit: "Bachelor's button attracts beneficial predatory insects near beans", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "bachelors_button", benefit: "Bachelor's button draws hoverflies whose larvae eat carrot aphids", benefitType: "pest-control" },

  // Chrysanthemum companions
  { plantId: "cabbage", companionId: "chrysanthemum", benefit: "Chrysanthemum contains pyrethrin, a natural insecticide protecting brassicas", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "chrysanthemum", benefit: "Chrysanthemum repels many common tomato pests with natural pyrethrin", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "chrysanthemum", benefit: "Chrysanthemum deters nematodes and other soil pests near carrots", benefitType: "pest-control" },
  { plantId: "bean", companionId: "chrysanthemum", benefit: "Chrysanthemum repels bean beetles and aphids", benefitType: "pest-control" },

  // Clover companions
  { plantId: "carrot", companionId: "clover", benefit: "Clover fixes nitrogen and attracts beneficial insects for carrots", benefitType: "soil" },
  { plantId: "cabbage", companionId: "clover", benefit: "Clover fixes nitrogen and attracts beneficial predators for brassicas", benefitType: "soil" },
  { plantId: "bean", companionId: "clover", benefit: "Clover and beans together massively fix nitrogen in the soil", benefitType: "soil" },
  { plantId: "squash", companionId: "clover", benefit: "Clover attracts bees and fixes nitrogen near squash", benefitType: "pollination" },
  { plantId: "strawberry", companionId: "clover", benefit: "Clover attracts bees for strawberry pollination and fixes nitrogen", benefitType: "pollination" },
  { plantId: "tomato", companionId: "clover", benefit: "Clover draws beneficial insects and improves soil nitrogen near tomatoes", benefitType: "soil" },

  // Goldenrod companions
  { plantId: "tomato", companionId: "goldenrod", benefit: "Goldenrod attracts 100+ beneficial insect species that prey on tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "goldenrod", benefit: "Goldenrod feeds massive numbers of native bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "goldenrod", benefit: "Goldenrod attracts beneficial predatory insects that protect beans", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "goldenrod", benefit: "Goldenrod draws parasitic wasps that control cucumber pests", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "goldenrod", benefit: "Goldenrod attracts hoverflies whose larvae prey on carrot aphids", benefitType: "pest-control" },

  // Milkweed companions
  { plantId: "tomato", companionId: "milkweed", benefit: "Milkweed attracts monarchs and predatory insects that feed on tomato pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "milkweed", benefit: "Milkweed attracts native bees and monarchs for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "milkweed", benefit: "Milkweed attracts aphid-eating insects, protecting beans", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "milkweed", benefit: "Milkweed attracts beneficial insects that protect cucumber plants", benefitType: "pest-control" },

  // New England Aster companions
  { plantId: "tomato", companionId: "new_england_aster", benefit: "New England aster supports pollinators late into fall near tomatoes", benefitType: "pollination" },
  { plantId: "squash", companionId: "new_england_aster", benefit: "New England aster attracts late-season bees for squash", benefitType: "pollination" },
  { plantId: "bean", companionId: "new_england_aster", benefit: "New England aster attracts beneficial insects that protect beans", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "new_england_aster", benefit: "New England aster attracts pollinators and beneficial insects near strawberries", benefitType: "general" },

  // Queen Anne's Lace companions
  { plantId: "tomato", companionId: "queen_annes_lace", benefit: "Queen Anne's lace attracts parasitic wasps that control tomato hornworm", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "queen_annes_lace", benefit: "Queen Anne's lace feeds dozens of parasitic wasps that prey on carrot fly", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "queen_annes_lace", benefit: "Queen Anne's lace attracts predatory wasps that control cucumber beetles", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "queen_annes_lace", benefit: "Queen Anne's lace draws parasitic wasps that attack cabbage caterpillars", benefitType: "pest-control" },
  { plantId: "bean", companionId: "queen_annes_lace", benefit: "Queen Anne's lace attracts beneficial insects that protect bean plants", benefitType: "pest-control" },

  // Russian Sage companions
  { plantId: "tomato", companionId: "russian_sage", benefit: "Russian sage attracts bees and butterflies and may deter some pests", benefitType: "pest-control" },
  { plantId: "squash", companionId: "russian_sage", benefit: "Russian sage attracts huge numbers of bees for squash pollination", benefitType: "pollination" },
  { plantId: "pepper", companionId: "russian_sage", benefit: "Russian sage brings bees and butterflies for pepper pollination", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "russian_sage", benefit: "Russian sage attracts beneficial insects to cucumber beds", benefitType: "pollination" },

  // Butterfly Bush companions
  { plantId: "squash", companionId: "butterfly_bush", benefit: "Butterfly bush draws butterflies and bees for squash pollination", benefitType: "pollination" },
  { plantId: "tomato", companionId: "butterfly_bush", benefit: "Butterfly bush attracts beneficial insects near tomato plants", benefitType: "pollination" },
  { plantId: "bean", companionId: "butterfly_bush", benefit: "Butterfly bush draws pollinators that also visit bean flowers", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "butterfly_bush", benefit: "Butterfly bush attracts butterflies and bees for cucumber pollination", benefitType: "pollination" },

  // Mexican Sunflower companions
  { plantId: "tomato", companionId: "mexican_sunflower", benefit: "Mexican sunflower attracts butterflies and beneficial insects near tomatoes", benefitType: "pollination" },
  { plantId: "squash", companionId: "mexican_sunflower", benefit: "Mexican sunflower is a top butterfly magnet for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "mexican_sunflower", benefit: "Mexican sunflower draws butterflies and bees to improve bean yield", benefitType: "pollination" },
  { plantId: "cucumber", companionId: "mexican_sunflower", benefit: "Mexican sunflower attracts beneficial insects to cucumber beds", benefitType: "pollination" },

  // Joe Pye Weed companions
  { plantId: "squash", companionId: "joe_pye_weed", benefit: "Joe Pye weed attracts monarchs and native bees for squash pollination", benefitType: "pollination" },
  { plantId: "tomato", companionId: "joe_pye_weed", benefit: "Joe Pye weed draws beneficial predatory insects near tomatoes", benefitType: "pest-control" },
  { plantId: "bean", companionId: "joe_pye_weed", benefit: "Joe Pye weed attracts pollinators and beneficial insects for beans", benefitType: "pollination" },

  // Sedum companions
  { plantId: "squash", companionId: "sedum", benefit: "Sedum provides late-season bloom for bees needed for squash", benefitType: "pollination" },
  { plantId: "tomato", companionId: "sedum", benefit: "Sedum attracts beneficial insects to the garden in fall", benefitType: "general" },
  { plantId: "strawberry", companionId: "sedum", benefit: "Sedum attracts late-season pollinators and covers ground near strawberries", benefitType: "general" },

  // Four O'Clock companions
  { plantId: "rose", companionId: "four_oclock", benefit: "Four o'clocks act as a trap crop for Japanese beetles, protecting roses", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "four_oclock", benefit: "Four o'clocks trap Japanese beetles away from tomatoes", benefitType: "pest-control" },
  { plantId: "squash", companionId: "four_oclock", benefit: "Four o'clocks attract hummingbirds for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "four_oclock", benefit: "Four o'clocks deter Japanese bean beetles as a trap crop", benefitType: "pest-control" },

  // Globe Thistle companions
  { plantId: "tomato", companionId: "globe_thistle", benefit: "Globe thistle is a top plant for bees that also benefit tomatoes", benefitType: "pollination" },
  { plantId: "squash", companionId: "globe_thistle", benefit: "Globe thistle attracts bumblebees and native bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "globe_thistle", benefit: "Globe thistle draws bees and beneficial insects for beans", benefitType: "pollination" },

  // Oxeye Daisy companions
  { plantId: "tomato", companionId: "oxeye_daisy", benefit: "Oxeye daisy attracts hoverflies whose larvae prey on tomato pests", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "oxeye_daisy", benefit: "Oxeye daisy feeds hoverflies whose larvae devour carrot aphids", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "oxeye_daisy", benefit: "Oxeye daisy attracts beneficial insects that protect brassicas", benefitType: "pest-control" },

  // Shasta Daisy companions
  { plantId: "tomato", companionId: "shasta_daisy", benefit: "Shasta daisy attracts hoverflies and parasitic wasps near tomatoes", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "shasta_daisy", benefit: "Shasta daisy draws hoverflies that prey on carrot aphids", benefitType: "pest-control" },
  { plantId: "squash", companionId: "shasta_daisy", benefit: "Shasta daisy attracts bees and beneficial insects for squash", benefitType: "pollination" },

  // Viola companions
  { plantId: "cabbage", companionId: "viola", benefit: "Violas attract beneficial insects and share cool-season timing with cabbage", benefitType: "general" },
  { plantId: "lettuce", companionId: "viola", benefit: "Violas and lettuce share cool-season timing and attract shared beneficials", benefitType: "general" },
  { plantId: "strawberry", companionId: "viola", benefit: "Violas attract early pollinators for spring strawberry blooms", benefitType: "pollination" },
  { plantId: "carrot", companionId: "viola", benefit: "Violas attract early beneficial insects to carrot beds", benefitType: "general" },

  // Candytuft companions
  { plantId: "cabbage", companionId: "candytuft", benefit: "Candytuft attracts beneficial ground beetles that eat cabbage pests", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "candytuft", benefit: "Candytuft attracts early-season beneficial insects near carrots", benefitType: "general" },
  { plantId: "strawberry", companionId: "candytuft", benefit: "Candytuft attracts early pollinators for strawberry flowers", benefitType: "pollination" },

  // Larkspur companions
  { plantId: "squash", companionId: "larkspur", benefit: "Larkspur attracts hummingbirds and bees for squash pollination", benefitType: "pollination" },
  { plantId: "bean", companionId: "larkspur", benefit: "Larkspur brings hummingbirds and bees to the bean garden", benefitType: "pollination" },
  { plantId: "tomato", companionId: "larkspur", benefit: "Larkspur attracts hummingbirds and beneficial insects near tomatoes", benefitType: "pollination" },

  // Forget-Me-Not companions
  { plantId: "rose", companionId: "forget_me_not", benefit: "Forget-me-nots fill space under roses, suppressing weeds and attracting beneficials", benefitType: "general" },
  { plantId: "tomato", companionId: "forget_me_not", benefit: "Forget-me-nots attract hoverflies whose larvae prey on aphids near tomatoes", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "forget_me_not", benefit: "Forget-me-nots share cool-season timing with lettuce and attract beneficial insects", benefitType: "general" },

  // Calibrachoa companions
  { plantId: "tomato", companionId: "calibrachoa", benefit: "Calibrachoa attracts pollinators and beneficial insects near tomatoes", benefitType: "pollination" },
  { plantId: "pepper", companionId: "calibrachoa", benefit: "Calibrachoa draws bees and beneficial insects to pepper plants", benefitType: "pollination" },
  { plantId: "strawberry", companionId: "calibrachoa", benefit: "Calibrachoa attracts pollinators for strawberry flowers in containers", benefitType: "pollination" },

  // Ranunculus companions
  { plantId: "lettuce", companionId: "ranunculus", benefit: "Ranunculus shares cool-season timing with lettuce and attracts early bees", benefitType: "general" },
  { plantId: "spinach", companionId: "ranunculus", benefit: "Ranunculus attracts early pollinators alongside cool-season spinach", benefitType: "pollination" },
  { plantId: "pea", companionId: "ranunculus", benefit: "Ranunculus and peas share early-season timing, attracting early pollinators", benefitType: "pollination" },

  // Canna companions
  { plantId: "corn", companionId: "canna", benefit: "Canna attracts hummingbirds and bees near corn, improving pollination", benefitType: "pollination" },
  { plantId: "tomato", companionId: "canna", benefit: "Canna attracts hummingbirds that also pollinate tomatoes", benefitType: "pollination" },
  { plantId: "eggplant", companionId: "canna", benefit: "Canna attracts pollinators to eggplant flowers and provides backdrop", benefitType: "pollination" },

  // Crocosmia companions
  { plantId: "tomato", companionId: "crocosmia", benefit: "Crocosmia attracts hummingbirds and bees to the vegetable garden", benefitType: "pollination" },
  { plantId: "squash", companionId: "crocosmia", benefit: "Crocosmia draws hummingbirds and bees needed for squash pollination", benefitType: "pollination" },
  { plantId: "zucchini", companionId: "crocosmia", benefit: "Crocosmia attracts pollinators essential for zucchini fruit set", benefitType: "pollination" },

  // Alstroemeria companions
  { plantId: "rose", companionId: "alstroemeria", benefit: "Alstroemeria attracts pollinators and beneficial insects near roses", benefitType: "general" },
  { plantId: "tomato", companionId: "alstroemeria", benefit: "Alstroemeria attracts bees and beneficial wasps near tomatoes", benefitType: "pollination" },

  // Muscari companions
  { plantId: "rose", companionId: "muscari", benefit: "Grape hyacinth flowers early, feeding queen bees before roses bloom", benefitType: "general" },
  { plantId: "strawberry", companionId: "muscari", benefit: "Muscari attracts early pollinators just as strawberries begin flowering", benefitType: "pollination" },
  { plantId: "pea", companionId: "muscari", benefit: "Muscari and peas share early-season timing, both benefiting early pollinators", benefitType: "pollination" },

  // Rudbeckia companions
  { plantId: "tomato", companionId: "rudbeckia", benefit: "Rudbeckia attracts beneficial insects and pollinators near tomatoes", benefitType: "pollination" },
  { plantId: "squash", companionId: "rudbeckia", benefit: "Rudbeckia draws bees and butterflies needed for squash pollination", benefitType: "pollination" },
  { plantId: "corn", companionId: "rudbeckia", benefit: "Rudbeckia attracts beneficial insects and pollinators to the corn garden", benefitType: "pollination" },

  // Parsley companions
  { plantId: "tomato", companionId: "parsley", benefit: "Parsley attracts swallowtail butterflies and beneficial wasps near tomatoes", benefitType: "pest-control" },
  { plantId: "asparagus", companionId: "parsley", benefit: "Parsley and asparagus are classic companions — parsley improves asparagus vigor", benefitType: "growth" },
  { plantId: "rose", companionId: "parsley", benefit: "Parsley repels rose beetles and attracts beneficial insects", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "parsley", benefit: "Parsley attracts beneficial insects that prey on carrot fly", benefitType: "pest-control" },

  // Cilantro companions
  { plantId: "spinach", companionId: "cilantro", benefit: "Cilantro repels aphids and spider mites from spinach when flowering", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "cilantro", benefit: "Cilantro flowers attract hoverflies that prey on lettuce aphids", benefitType: "pest-control" },
  { plantId: "broccoli", companionId: "cilantro", benefit: "Cilantro repels aphids and attracts parasitic wasps near brassicas", benefitType: "pest-control" },
  { plantId: "kale", companionId: "cilantro", benefit: "Cilantro confuses cabbage worm moths and attracts beneficial wasps", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "cilantro", benefit: "Cilantro attracts parasitic wasps that control tomato hornworm", benefitType: "pest-control" },

  // Oregano companions
  { plantId: "tomato", companionId: "oregano", benefit: "Oregano repels spider mites and aphids while attracting pollinators", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "oregano", benefit: "Oregano deters pests and attracts beneficial insects near peppers", benefitType: "pest-control" },
  { plantId: "broccoli", companionId: "oregano", benefit: "Oregano confuses cabbage white butterflies and deters many brassica pests", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "oregano", benefit: "Oregano repels cucumber beetles and attracts beneficial predators", benefitType: "pest-control" },
  { plantId: "eggplant", companionId: "oregano", benefit: "Oregano deters aphids and other pests from eggplant", benefitType: "pest-control" },

  // Catnip companions
  { plantId: "squash", companionId: "catnip", benefit: "Catnip repels squash bugs and aphids that damage squash plants", benefitType: "pest-control" },
  { plantId: "eggplant", companionId: "catnip", benefit: "Catnip repels flea beetles that devastate eggplant foliage", benefitType: "pest-control" },
  { plantId: "cucumber", companionId: "catnip", benefit: "Catnip repels aphids and flea beetles from cucumbers", benefitType: "pest-control" },
  { plantId: "zucchini", companionId: "catnip", benefit: "Catnip repels squash bugs and aphids from zucchini plants", benefitType: "pest-control" },
  { plantId: "potato", companionId: "catnip", benefit: "Catnip repels aphids, flea beetles, and Colorado potato beetles", benefitType: "pest-control" },

  // Lemon Balm companions
  { plantId: "squash", companionId: "lemon_balm", benefit: "Lemon balm strongly attracts bees for improved squash pollination", benefitType: "pollination" },
  { plantId: "tomato", companionId: "lemon_balm", benefit: "Lemon balm attracts pollinators and repels gnats near tomatoes", benefitType: "general" },
  { plantId: "zucchini", companionId: "lemon_balm", benefit: "Lemon balm draws bees essential for zucchini fruit set", benefitType: "pollination" },
  { plantId: "pumpkin", companionId: "lemon_balm", benefit: "Lemon balm attracts pollinators critical for pumpkin production", benefitType: "pollination" },

  // Marjoram companions
  { plantId: "tomato", companionId: "marjoram", benefit: "Marjoram is said to enhance flavor of nearby tomatoes and repel pests", benefitType: "growth" },
  { plantId: "pepper", companionId: "marjoram", benefit: "Marjoram attracts beneficial insects and improves pepper growth", benefitType: "growth" },
  { plantId: "cucumber", companionId: "marjoram", benefit: "Marjoram repels some pests and attracts beneficial insects near cucumbers", benefitType: "pest-control" },

  // Garlic companions
  { plantId: "rose", companionId: "garlic", benefit: "Garlic repels aphids, Japanese beetles, and fungal diseases from roses", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "garlic", benefit: "Garlic repels spider mites and aphids from tomatoes", benefitType: "pest-control" },
  { plantId: "carrot", companionId: "garlic", benefit: "Garlic deters carrot fly with its strong scent", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "garlic", benefit: "Garlic repels aphids and slugs from lettuce", benefitType: "pest-control" },
  { plantId: "beet", companionId: "garlic", benefit: "Garlic deters beet-feeding insects with its pungent scent", benefitType: "pest-control" },
  { plantId: "potato", companionId: "garlic", benefit: "Garlic planted near potatoes repels aphids and Colorado potato beetle", benefitType: "pest-control" },
  { plantId: "eggplant", companionId: "garlic", benefit: "Garlic repels spider mites and aphids from eggplant", benefitType: "pest-control" },

  // Onion companions
  { plantId: "carrot", companionId: "onion", benefit: "Onions repel carrot fly; carrots repel onion fly — a classic pairing", benefitType: "pest-control" },
  { plantId: "tomato", companionId: "onion", benefit: "Onions deter aphids and other soft-bodied pests from tomatoes", benefitType: "pest-control" },
  { plantId: "cabbage", companionId: "onion", benefit: "Onions confuse and repel cabbage white butterflies with their scent", benefitType: "pest-control" },
  { plantId: "beet", companionId: "onion", benefit: "Onions and beets are excellent companions, each repelling the other's pests", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "onion", benefit: "Onion scent deters aphids and slugs that attack lettuce", benefitType: "pest-control" },
  { plantId: "kale", companionId: "onion", benefit: "Onions confuse cabbage moths and repel brassica pests near kale", benefitType: "pest-control" },
  { plantId: "broccoli", companionId: "onion", benefit: "Onions mask brassica scent, confusing cabbage whites and other pests", benefitType: "pest-control" },

  // Radish companions
  { plantId: "cucumber", companionId: "radish", benefit: "Radishes act as a trap crop for cucumber beetles, protecting cucumbers", benefitType: "pest-control" },
  { plantId: "spinach", companionId: "radish", benefit: "Radishes and spinach share cool-season timing and trap leafminers", benefitType: "pest-control" },
  { plantId: "lettuce", companionId: "radish", benefit: "Radishes loosen soil for lettuce roots and deter aphids", benefitType: "growth" },
  { plantId: "carrot", companionId: "radish", benefit: "Radishes loosen compacted soil, making room for carrot roots to develop", benefitType: "growth" },
  { plantId: "squash", companionId: "radish", benefit: "Radishes repel squash vine borers when planted at the base of squash", benefitType: "pest-control" },

  // Pea companions
  { plantId: "corn", companionId: "pea", benefit: "Peas fix nitrogen that corn needs to produce large, full ears", benefitType: "soil" },
  { plantId: "carrot", companionId: "pea", benefit: "Peas fix nitrogen that benefits carrots; their roots don't compete", benefitType: "soil" },
  { plantId: "lettuce", companionId: "pea", benefit: "Peas fix nitrogen and provide light shade that slows lettuce bolting", benefitType: "growth" },
  { plantId: "spinach", companionId: "pea", benefit: "Peas fix nitrogen for spinach while their shade helps prevent bolting", benefitType: "growth" },
  { plantId: "radish", companionId: "pea", benefit: "Peas and radishes grow well together as spring companions in the garden", benefitType: "general" },

  // Corn companions
  { plantId: "bean", companionId: "corn", benefit: "Corn provides a natural trellis for pole beans in the Three Sisters method", benefitType: "growth" },
  { plantId: "squash", companionId: "corn", benefit: "Corn, squash, and beans form the Three Sisters — each supporting the others", benefitType: "growth" },
  { plantId: "pumpkin", companionId: "corn", benefit: "Corn provides support for pumpkin vines; squash deters corn pests", benefitType: "general" },
  { plantId: "zucchini", companionId: "corn", benefit: "Corn gives structure while zucchini's large leaves shade out weeds below", benefitType: "growth" },

  // Potato companions
  { plantId: "cabbage", companionId: "potato", benefit: "Potatoes repel some cabbage pests; brassicas deter Colorado potato beetle", benefitType: "pest-control" },
  { plantId: "bean", companionId: "potato", benefit: "Beans fix nitrogen that benefits potato growth and repel Colorado beetle", benefitType: "soil" },
  { plantId: "corn", companionId: "potato", benefit: "Potatoes and corn are traditional garden neighbors that share space well", benefitType: "general" },

  // Eggplant companions
  { plantId: "tomato", companionId: "eggplant", benefit: "Eggplant acts as a trap crop for Colorado potato beetle near tomatoes", benefitType: "pest-control" },
  { plantId: "pepper", companionId: "eggplant", benefit: "Eggplant and peppers share similar growing needs and deter each other's pests", benefitType: "general" },
  { plantId: "bean", companionId: "eggplant", benefit: "Beans fix nitrogen that benefits eggplant and repel eggplant pests", benefitType: "soil" },

  // Zucchini companions
  { plantId: "squash", companionId: "zucchini", benefit: "Zucchini and squash share pollinator needs; planting together improves fruit set", benefitType: "pollination" },
  { plantId: "corn", companionId: "zucchini", benefit: "Zucchini leaves shade out weeds while corn provides structure nearby", benefitType: "growth" },
  { plantId: "bean", companionId: "zucchini", benefit: "Beans fix nitrogen that feeds zucchini's heavy nutrient needs", benefitType: "soil" },
  { plantId: "pumpkin", companionId: "zucchini", benefit: "Zucchini and pumpkin cross-pollinate, improving fruit set for both", benefitType: "pollination" },

  // Pumpkin companions
  { plantId: "corn", companionId: "pumpkin", benefit: "Pumpkin leaves shade out weeds around corn in a Three Sisters-style guild", benefitType: "growth" },
  { plantId: "bean", companionId: "pumpkin", benefit: "Beans fix nitrogen that pumpkins need for vine growth and fruiting", benefitType: "soil" },
  { plantId: "squash", companionId: "pumpkin", benefit: "Pumpkin and squash cross-pollinate and attract shared pollinators", benefitType: "pollination" },

  // Asparagus companions
  { plantId: "tomato", companionId: "asparagus", benefit: "Asparagus repels nematodes that harm tomatoes; tomatoes repel asparagus beetles", benefitType: "pest-control" },
  { plantId: "strawberry", companionId: "asparagus", benefit: "Asparagus and strawberries are classic long-term garden companions", benefitType: "general" },
  { plantId: "carrot", companionId: "asparagus", benefit: "Asparagus and carrots benefit each other as deep-rooted perennial companions", benefitType: "general" },

  // Spinach companions
  { plantId: "lettuce", companionId: "spinach", benefit: "Spinach and lettuce share timing, spacing, and growing needs perfectly", benefitType: "general" },
  { plantId: "carrot", companionId: "spinach", benefit: "Spinach provides ground cover that keeps carrot soil cool and moist", benefitType: "growth" },
  { plantId: "strawberry", companionId: "spinach", benefit: "Spinach fills space between strawberries, suppressing weeds", benefitType: "growth" },
  { plantId: "radish", companionId: "spinach", benefit: "Radishes act as a trap crop for leafminers that attack spinach", benefitType: "pest-control" },

  // Kale companions
  { plantId: "cabbage", companionId: "kale", benefit: "Kale and cabbage share companion needs — interplant with onions and herbs", benefitType: "general" },
  { plantId: "lettuce", companionId: "kale", benefit: "Kale provides light shade that slows lettuce bolting in warm weather", benefitType: "growth" },
  { plantId: "beet", companionId: "kale", benefit: "Kale and beets grow at different depths, sharing space and nutrients well", benefitType: "general" },

  // Broccoli companions
  { plantId: "cabbage", companionId: "broccoli", benefit: "Broccoli and cabbage share the same companion planting strategy", benefitType: "general" },
  { plantId: "lettuce", companionId: "broccoli", benefit: "Broccoli provides light shade for lettuce; they share cool-season timing", benefitType: "growth" },
  { plantId: "spinach", companionId: "broccoli", benefit: "Broccoli and spinach are ideal cool-season interplanting partners", benefitType: "general" },

  // Beet companions
  { plantId: "lettuce", companionId: "beet", benefit: "Beets and lettuce share cool-season timing and rarely compete for resources", benefitType: "general" },
  { plantId: "cabbage", companionId: "beet", benefit: "Beets add manganese to soil via their leaves, benefiting nearby brassicas", benefitType: "soil" },
  { plantId: "spinach", companionId: "beet", benefit: "Beets and spinach are excellent cool-season interplanting companions", benefitType: "general" },

  // Swiss Chard companions
  { plantId: "lettuce", companionId: "swiss_chard", benefit: "Swiss chard and lettuce share cool-season timing and space well together", benefitType: "general" },
  { plantId: "spinach", companionId: "swiss_chard", benefit: "Swiss chard and spinach are natural cool-season garden companions", benefitType: "general" },
  { plantId: "bean", companionId: "swiss_chard", benefit: "Beans fix nitrogen that supports Swiss chard's leafy growth", benefitType: "soil" },
];

export function getCompanionsForPlants(
  plantIds: string[],
  includeHerbs: boolean,
  includeVegetables: boolean,
  zone: number | null
): { plant: Plant; benefit: string; benefitType: CompanionRelation["benefitType"] }[] {
  const results: Map<string, { plant: Plant; benefit: string; benefitType: CompanionRelation["benefitType"] }> = new Map();

  for (const plantId of plantIds) {
    const relations = COMPANION_RELATIONS.filter(r => r.plantId === plantId);
    for (const rel of relations) {
      if (results.has(rel.companionId)) continue;
      const companion = PLANTS.find(p => p.id === rel.companionId);
      if (!companion) continue;
      if (companion.type === "herb" && !includeHerbs) continue;
      if (companion.type === "vegetable" && !includeVegetables) continue;
      if (plantIds.includes(companion.id)) continue;
      if (zone !== null && !companion.zones.includes(zone)) continue;
      results.set(rel.companionId, { plant: companion, benefit: rel.benefit, benefitType: rel.benefitType });
    }
  }

  return Array.from(results.values()).sort((a, b) => {
    const typeOrder = { flower: 0, herb: 1, vegetable: 2 };
    return typeOrder[a.plant.type] - typeOrder[b.plant.type];
  });
}

export function getZoneSuggestions(
  zone: number,
  excludeIds: string[],
  max = 4
): Plant[] {
  return PLANTS.filter(
    p => p.type === "flower" && p.zones.includes(zone) && !excludeIds.includes(p.id)
  ).slice(0, max);
}
