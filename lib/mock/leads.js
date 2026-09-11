const website = (url, status = "active", https = true) => ({
  exists: true, url, status, https, lastChecked: "Today"
});

const noWebsite = () => ({ exists: false, status: "unknown" });

const google = (rating, mapsUrl, status = "OPERATIONAL") => ({
  profileExists: true,
  placeId: `mock-${Math.random().toString(36).slice(2, 10)}`,
  mapsUrl,
  rating,
  businessStatus: status
});

const noGoogle = () => ({ profileExists: false });

/** @type {import("@/types/lead").Lead[]} */
export const leads = [
  { id:"lead-001", businessName:"Northline Barber Co.", category:"Barber", address:"1420 Westheimer Rd", city:"Houston", state:"TX", country:"USA", google:google(4.7, "https://maps.google.com/?q=Northline+Barber+Co"), website:noWebsite(), contact:{phone:"+1 (555) 201-1048"} },
  { id:"lead-002", businessName:"Copper & Oak Barbers", category:"Barber", address:"815 Congress Ave", city:"Austin", state:"TX", country:"USA", google:google(4.5, "https://maps.google.com/?q=Copper+Oak+Barbers"), website:website("https://copperoak.example.com"), contact:{phone:"+1 (555) 201-1124"} },
  { id:"lead-003", businessName:"Main Street Grooming", category:"Barber", address:"37 Main St", city:"Denver", state:"CO", country:"USA", google:google(4.8, "https://maps.google.com/?q=Main+Street+Grooming"), website:website("https://mainstreetgrooming.example.com","broken"), contact:{phone:"+1 (555) 201-1190"} },
  { id:"lead-004", businessName:"Silverline Cuts", category:"Barber", address:"204 Pine St", city:"Seattle", state:"WA", country:"USA", google:google(4.3, "https://maps.google.com/?q=Silverline+Cuts"), website:noWebsite(), contact:{phone:"+1 (555) 201-1201"} },
  { id:"lead-005", businessName:"Oak District Barber", category:"Barber", address:"910 Market St", city:"San Francisco", state:"CA", country:"USA", google:google(4.9, "https://maps.google.com/?q=Oak+District+Barber"), website:website("https://oakdistrict.example.com"), contact:{phone:"+1 (555) 201-1227"} },
  { id:"lead-006", businessName:"Gentlemen's Corner", category:"Barber", address:"610 Monroe St", city:"Chicago", state:"IL", country:"USA", google:google(4.4, "https://maps.google.com/?q=Gentlemens+Corner"), website:noWebsite(), contact:{phone:"+1 (555) 201-1292"} },
  { id:"lead-007", businessName:"The Trim Room", category:"Barber", address:"92 Franklin Ave", city:"Brooklyn", state:"NY", country:"USA", google:google(4.6, "https://maps.google.com/?q=The+Trim+Room"), website:website("https://thetrimroom.example.com"), contact:{phone:"+1 (555) 201-1355"} },
  { id:"lead-008", businessName:"West End Clippers", category:"Barber", address:"455 5th Ave", city:"New York", state:"NY", country:"USA", google:google(4.2, "https://maps.google.com/?q=West+End+Clippers"), website:website("https://westend.example.com"), contact:{phone:"+1 (555) 201-1417"} },
  { id:"lead-009", businessName:"Harbor Barber Studio", category:"Barber", address:"18 Harbor Way", city:"Boston", state:"MA", country:"USA", google:google(4.7, "https://maps.google.com/?q=Harbor+Barber+Studio"), website:noWebsite(), contact:{phone:"+1 (555) 201-1480"} },
  { id:"lead-010", businessName:"Maple Street Cuts", category:"Barber", address:"121 Maple Ave", city:"Portland", state:"OR", country:"USA", google:noGoogle(), website:website("https://maplestreet.example.com"), contact:{phone:"+1 (555) 201-1503"} },
  { id:"lead-011", businessName:"Brightside Dental", category:"Dentist", address:"77 Lamar Blvd", city:"Austin", state:"TX", country:"USA", google:google(4.8, "https://maps.google.com/?q=Brightside+Dental"), website:website("https://brightside.example.com"), contact:{phone:"+1 (555) 202-1031"} },
  { id:"lead-012", businessName:"Cedar Dental Group", category:"Dentist", address:"1800 Elm St", city:"Dallas", state:"TX", country:"USA", google:google(4.6, "https://maps.google.com/?q=Cedar+Dental+Group"), website:noWebsite(), contact:{phone:"+1 (555) 202-1098"} },
  { id:"lead-013", businessName:"Lakeview Smiles", category:"Dentist", address:"220 Lakeside Dr", city:"Chicago", state:"IL", country:"USA", google:google(4.4, "https://maps.google.com/?q=Lakeview+Smiles"), website:website("https://lakeviewsmiles.example.com","broken"), contact:{phone:"+1 (555) 202-1155"} },
  { id:"lead-014", businessName:"Park Avenue Dental", category:"Dentist", address:"19 Park Ave", city:"New York", state:"NY", country:"USA", google:google(4.9, "https://maps.google.com/?q=Park+Avenue+Dental"), website:website("https://parkavenuedental.example.com"), contact:{phone:"+1 (555) 202-1219"} },
  { id:"lead-015", businessName:"Summit Dental Care", category:"Dentist", address:"400 17th St", city:"Denver", state:"CO", country:"USA", google:noGoogle(), website:noWebsite(), contact:{phone:"+1 (555) 202-1284"} },
  { id:"lead-016", businessName:"Golden State Dental", category:"Dentist", address:"601 Mission St", city:"San Francisco", state:"CA", country:"USA", google:google(4.5, "https://maps.google.com/?q=Golden+State+Dental"), website:noWebsite(), contact:{phone:"+1 (555) 202-1322"} },
  { id:"lead-017", businessName:"Sunset Family Dentistry", category:"Dentist", address:"88 Sunset Blvd", city:"Los Angeles", state:"CA", country:"USA", google:google(4.7, "https://maps.google.com/?q=Sunset+Family+Dentistry"), website:website("https://sunsetfamily.example.com"), contact:{phone:"+1 (555) 202-1387"} },
  { id:"lead-018", businessName:"Riverbend Dental", category:"Dentist", address:"51 River Rd", city:"Nashville", state:"TN", country:"USA", google:google(4.1, "https://maps.google.com/?q=Riverbend+Dental"), website:noWebsite(), contact:{phone:"+1 (555) 202-1440"} },
  { id:"lead-019", businessName:"Cypress Plumbing", category:"Plumber", address:"310 Cypress St", city:"Houston", state:"TX", country:"USA", google:google(4.6, "https://maps.google.com/?q=Cypress+Plumbing"), website:website("https://cypressplumbing.example.com"), contact:{phone:"+1 (555) 203-1012"} },
  { id:"lead-020", businessName:"Blue Oak Plumbing", category:"Plumber", address:"90 Oak Road", city:"Dallas", state:"TX", country:"USA", google:google(4.3, "https://maps.google.com/?q=Blue+Oak+Plumbing"), website:noWebsite(), contact:{phone:"+1 (555) 203-1074"} },
  { id:"lead-021", businessName:"Metro Pipeworks", category:"Plumber", address:"612 Broadway", city:"New York", state:"NY", country:"USA", google:google(4.8, "https://maps.google.com/?q=Metro+Pipeworks"), website:website("https://metropipeworks.example.com"), contact:{phone:"+1 (555) 203-1130"} },
  { id:"lead-022", businessName:"Evergreen Drain Co.", category:"Plumber", address:"72 Evergreen Way", city:"Seattle", state:"WA", country:"USA", google:google(4.5, "https://maps.google.com/?q=Evergreen+Drain+Co"), website:website("https://evergreendrain.example.com","broken"), contact:{phone:"+1 (555) 203-1188"} },
  { id:"lead-023", businessName:"Coastal Pipe & Repair", category:"Plumber", address:"301 Ocean Ave", city:"San Diego", state:"CA", country:"USA", google:noGoogle(), website:website("https://coastalpipe.example.com"), contact:{phone:"+1 (555) 203-1231"} },
  { id:"lead-024", businessName:"Capitol Plumbing", category:"Plumber", address:"17 Capitol Sq", city:"Columbus", state:"OH", country:"USA", google:google(4.2, "https://maps.google.com/?q=Capitol+Plumbing"), website:noWebsite(), contact:{phone:"+1 (555) 203-1280"} },
  { id:"lead-025", businessName:"Willow Plumbing Services", category:"Plumber", address:"45 Willow Ln", city:"Boston", state:"MA", country:"USA", google:google(4.7, "https://maps.google.com/?q=Willow+Plumbing+Services"), website:website("https://willowplumbing.example.com"), contact:{phone:"+1 (555) 203-1346"} },
  { id:"lead-026", businessName:"Harvest Table", category:"Restaurant", address:"14 Market Square", city:"Austin", state:"TX", country:"USA", google:google(4.8, "https://maps.google.com/?q=Harvest+Table"), website:website("https://harvesttable.example.com"), contact:{phone:"+1 (555) 204-1018"} },
  { id:"lead-027", businessName:"Juniper Kitchen", category:"Restaurant", address:"80 Juniper St", city:"Denver", state:"CO", country:"USA", google:google(4.4, "https://maps.google.com/?q=Juniper+Kitchen"), website:noWebsite(), contact:{phone:"+1 (555) 204-1072"} },
  { id:"lead-028", businessName:"North Harbor Bistro", category:"Restaurant", address:"201 Harbor St", city:"Boston", state:"MA", country:"USA", google:google(4.6, "https://maps.google.com/?q=North+Harbor+Bistro"), website:website("https://northharbor.example.com","broken"), contact:{phone:"+1 (555) 204-1129"} },
  { id:"lead-029", businessName:"Olive & Stone", category:"Restaurant", address:"9 Olive Way", city:"San Francisco", state:"CA", country:"USA", google:google(4.9, "https://maps.google.com/?q=Olive+Stone"), website:website("https://oliveandstone.example.com"), contact:{phone:"+1 (555) 204-1187"} },
  { id:"lead-030", businessName:"Redwood Diner", category:"Restaurant", address:"550 Redwood Ave", city:"Portland", state:"OR", country:"USA", google:noGoogle(), website:noWebsite(), contact:{phone:"+1 (555) 204-1240"} }
];

export function getLeadById(id) {
  return leads.find((lead) => lead.id === id);
}
