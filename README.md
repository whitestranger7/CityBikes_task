## React Web Developer Test Task
### description
Using public data from CityBikes, build web application to show list of networks and stations related to each network.

Application visually should be devided by 2 columns:
● Left column should contain list of networks
● Right column should contain list of stations related to active selected network in the
left column

By default, first loaded network in a list should be selected in the left column. According to selected network corresponding stations should be shown in right column.
During loading networks or station, loader should be shown somewhere.
Each station should have a functionality to be liked/unliked. Keep this list anywhere you want on a frontend. Liked station should have an icon of a heart. Each liked station can be unliked if user clicks on this heart.

Also, find a place somewhere on top of the page to render additional information:
● Name of selected station
● Number of bikes that belong to current selected network (can be counted by
summation from each station in the network)
There might be networks with the same name, but different id. Don’t group them, just leave as it is.

### Links
It should be enough to only operate with this 2 requests:
1. Request to get list of networks: ​https://api.citybik.es/v2/networks?fields=id,company
2. Request to get list of stations that belong to some network:
https://api.citybik.es/v2/networks/norisbike-nurnberg​ (norisbike-nurnberg→ this is just an example of a network)
Additional Information
This is not required, but would be nice to have there technologies:
Public API is here: ​http://api.citybik.es/v2/
   
1. Axios
2. Sass
3. TypeScript
4. Reselect
5. Module styles