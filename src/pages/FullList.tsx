import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FullList = () => {
  const themes: string[] = [
    "Aadavark",
    "AdForest",
    "Adifier",
    "Admania",
    "Apress",
    "Babystreet",
    "Barberry",
    "Basel",
    "Bimber",
    "Blade",
    "Boombox",
    "Breek",
    "Bridge",
    "Broklyn",
    "Buzz",
    "Buzzy",
    "Caden",
    "Calafate",
    "Careefy",
    "CenaStore",
    "Cerato",
    "Cheerup",
    "Citybook",
    "Ciyashop",
    "Classiads",
    "Consulting",
    "Contentberg",
    "Cookandmeal",
    "Digiqole",
    "Eduma",
    "Elessi",
    "Enfold",
    "Fierzy",
    "Flatsome",
    "Flipmart",
    "Florian",
    "Freshio",
    "Froday",
    "Goliath",
    "Goodlife",
    "Goodnews",
    "Goya",
    "Greenmart",
    "Magplus",
    "Makali",
    "Market",
    "Martfury",
    "Maxshop",
    "Mayosis",
    "Mediacenter",
    "Merchandiser",
    "Metro",
    "Milano",
    "Mobimax",
    "Molla",
    "MRTailor",
    "MyMedi",
    "Neeon",
    "Neoton",
    "Newsblock",
    "Newsmag",
    "Newspaper",
    "Noucake",
    "Organic",
    "Oxygen",
    "Pangja",
    "Papr",
    "Peakshops",
    "Pinkmart",
    "Pixwell",
    "Plugins",
    "Pluto",
    "Poco",
    "Porto",
    "Presso",
    "Pressroom",
    "Printshop",
    "Puca",
    "Razzi",
    "Rehub",
    "Revo",
    "Rey",
    "Riode",
    "Sahifa",
    "Saxon",
    "Gridlove",
    "Groci",
    "Gutentype",
    "Henrik",
    "Herald",
    "Shopkeeper",
    "Shopme",
    "Shoppystore",
    "Smartic",
    "Smartmag",
    "Sober",
    "Soledad",
    "Squaretype",
    "Stockie",
    "Stockie",
    "Strolik",
    "Supro",
    "Techmarket",
    "The7",
    "TheLanger",
    "TheRetailer",
    "Thevoux",
    "Tokoo",
    "Tonda",
    "UDesign",
    "Valenti",
    "Vinkmag",
    "Woodmart",
    "Zeen",
    "Zoxnews",
    "Zoxpress",
    "Homey",
    "Hongo",
    "Hyperx",
    "Ibid",
    "Impreza",
    "Jannah",
    "Jevelin",
    "Jnews",
    "Jobmonster",
    "Johannes",
    "June",
    "JupiterX",
    "Kapee",
    "Kartpul",
    "Kicker",
    "Kidz",
    "Kingdom",
    "Konte",
    "LeArts",
    "Listingpro",
    "Locales",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
          Full Themes and Plugins List
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {themes.map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="rounded-md border bg-card text-card-foreground px-4 py-2"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Plugins</h2>
          <p className="text-muted-foreground">Full plugins list coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FullList;