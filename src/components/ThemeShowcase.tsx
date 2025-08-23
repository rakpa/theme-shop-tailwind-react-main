import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Eye, Heart } from "lucide-react";

const ThemeShowcase = () => {
  const imageFiles = [
    'adrenalin.jpg',
    'All in one SEO PRO.jpg',
    'amely.jpg',
    'auros.jpg',
    'aurum.jpg',
    'auteur.jpg',
    'avada.jpg',
    'babystreet.jpg',
    'Backup Buddy.jpg',
    'basel.jpg',
    'bazaar.jpg',
    'Beehive Pro.jpg',
    'besa.jpg',
    'bimber.jpg',
    'bioLife.jpg',
    'box Shop.jpg',
    'cartzilla.jpg',
    'chromium.jpg',
    'Content Locker.jpg',
    'cosmetro.jpg',
    'electro.jpg',
    'elessi.jpg',
    'emallshop.jpg',
    'flipmart.jpg',
    'freshio.jpg',
    'froday.jpg',
    'Google Analytics+.jpg',
    'google-analytics.jpg',
    'greenmart.jpg',
    'groci.jpg',
    'iThemes Security Pro.jpg',
    // Add more as needed
  ];

  // Build themes array from imageFiles, skipping duplicates by normalized name
  const seenThemeNames = new Set();
  const themes = [];
  for (let idx = 0; idx < imageFiles.length; idx++) {
    const img = imageFiles[idx];
    const name = img
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    const normalized = name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (!seenThemeNames.has(normalized)) {
      themes.push({
        id: idx + 1,
        name,
        category: "Theme",
        price: 49,
        rating: 4.9,
        downloads: "1K+",
        image: `/images/${img}`,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        isPopular: idx === 0
      });
      seenThemeNames.add(normalized);
    }
  }

  // List of allowed theme names (normalized: lowercase, no spaces/dashes)
  const allowedThemeNames = [
    "avada", // Added Avada
    "aadavark","adforest","adifier","admania","apress","babystreet","barberry","basel","bimber","blade","boombox","breek","bridge","broklyn","buzz","buzzy","caden","calafate","careefy","cenastore","cerato","cheerup","citybook","ciyashop","classiads","consulting","contentberg","cookandmeal","digiqole","eduma","elessi","enfold","fierzy","flatsome","flipmart","florian","freshio","froday","goliath","goodlife","goodnews","goya","greenmart","gridlove",/*"groci",*/"gutentype","henrik","herald","homey","hongo","hyperx","ibid","impreza","jannah","jevelin","jnews","jobmonster","johannes","june","jupiterx","kapee","kartpul","kicker","kidz","kingdom","konte","learts","listingpro","locales","magplus","makali","market","martfury","maxshop","mayosis","mediacenter","merchandiser","metro","milano","mobimax","molla","mrtailor","mymedi","neeon","neoton","newsblock","newsmag","newspaper","noucake","organic","oxygen","pangja","papr","peakshops","pinkmart","pixwell","plugins","pluto","poco","porto","presso","pressroom","printshop","puca","razzi","rehub","revo","rey","riode","sahifa","saxon","shopkeeper","shopme","shoppystore","smartic","smartmag","sober","soledad","squaretype","stockie","strolik","supro","techmarket","the7","thelanger","theretailer","thevoux","tokoo","tonda","udesign","valenti","vinkmag","woodmart","zeen","zoxnews","zoxpress"
  ];

  // Filter uniqueThemes to only include allowed themes
  const filteredThemes = themes.filter(theme => {
    const normalized = theme.name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    return allowedThemeNames.includes(normalized);
  });

  // Sort filteredThemes alphabetically by theme name
  filteredThemes.sort((a, b) => a.name.localeCompare(b.name));

  // Remove duplicate entries from filteredThemes based on normalized theme name
  const uniqueFilteredThemes = [];
  const seenThemeNamesForFinal = new Set();
  for (const theme of filteredThemes) {
    const normalized = theme.name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (!seenThemeNamesForFinal.has(normalized)) {
      uniqueFilteredThemes.push(theme);
      seenThemeNamesForFinal.add(normalized);
    }
  }

  return (
    <section id="themes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Premium WordPress 
            <span className="text-primary"> Themes Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked collection of premium WordPress themes designed 
            for modern businesses and creative professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {uniqueFilteredThemes.map((theme) => (
            <Card key={theme.id} className="h-full flex flex-col group hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden bg-white flex-shrink-0" style={{ aspectRatio: '16/9' }}>
                <img 
                  src={theme.image} 
                  alt={theme.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {theme.isPopular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" className="bg-background/80 backdrop-blur-sm hover:bg-background">
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {theme.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="fill-accent text-accent mr-1" size={14} />
                    {theme.rating}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {theme.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-4">
                  {theme.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Download size={14} className="mr-1" />
                    {theme.downloads} downloads
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    ${theme.price}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm">
                    <Eye size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show all images in a card layout identical to the theme cards, with full card details */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center">
            {[
              'adrenalin.jpg',
              'All in one SEO PRO.jpg',
              'amely.jpg',
              'auros.jpg',
              'aurum.jpg',
              'auteur.jpg',
              'avada.jpg',
              'babystreet.jpg',
              'Backup Buddy.jpg',
              'basel.jpg',
              'bazaar.jpg',
              'Beehive Pro.jpg',
              'besa.jpg',
              'bimber.jpg',
              'bioLife.jpg',
              'box Shop.jpg',
              'cartzilla.jpg',
              'chromium.jpg',
              'Content Locker.jpg',
              'cosmetro.jpg',
              'electro.jpg',
              'elessi.jpg',
              'emallshop.jpg',
              'flipmart.jpg',
              'freshio.jpg',
              'froday.jpg',
              'Google Analytics+.jpg',
              'google-analytics.jpg',
              'greenmart.jpg',
              'groci.jpg',
              'iThemes Security Pro.jpg',
              // Add more as needed
            ].map((img) => {
              const name = img
                .replace(/\.[^/.]+$/, "")
                .replace(/[-_]+/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase());
              return (
                <Card key={img} className="group hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="relative overflow-hidden">
                    <img src={`/images/${img}`} alt={name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{name}</Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="bg-background/80 backdrop-blur-sm hover:bg-background">
                        <Heart size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">{name}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="fill-accent text-accent mr-1" size={14} />
                        4.9
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
                    <div className="flex flex-wrap gap-1 mb-4">
                      <Badge variant="outline" className="text-xs">Feature 1</Badge>
                      <Badge variant="outline" className="text-xs">Feature 2</Badge>
                      <Badge variant="outline" className="text-xs">Feature 3</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download size={14} className="mr-1" />
                        1K+ downloads
                      </div>
                      <div className="text-2xl font-bold text-primary">$49</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm"><Eye size={16} /></Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeShowcase;