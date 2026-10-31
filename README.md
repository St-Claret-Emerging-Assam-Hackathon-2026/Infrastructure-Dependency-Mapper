# Infrastructure Dependency Mapper

IDM empowers local authorities and emergency planners to move beyond static hazard maps by simulating how single-point infrastructure failures (such as flooded bridges or washed-out road segments in Kamrup) impact regional healthcare accessibility. By parsing OpenStreetMap data into a local routing graph, IDM delivers instant visibility into isolated localities, travel time delays, and automated infrastructure criticality rankings—all running locally without heavy GIS software dependencies or server roundtrips.

## Installation Guide (Dev)

The steps to cloning running this repository are as follows:

```
git clone https://github.com/St-Claret-Emerging-Assam-Hackathon-2026/Infrastructure-Dependency-Mapper.git
npm install
npm run dev -- --open
```

## Issues

The issues which are to be completed are mentioned below. Kindly check the check-boxes if the issue is fixed. They are arranged in order.

- [ ] Create Python script to generate mock OSM network JSON
- [X] Convert OSM JSON data to Geo JSON
- [ ] Implement Dijkstra shortest-path Router
- [ ] Rendering the Map
- [ ] Build disruption control panel
- [ ] Criticality scoring system

## Contributing

1. Don't do hacky things; write a few extra line of code if required.
2. No emojis, non roman characters, or anything such.
3. Naming matters; write clear and understandable names.

## AI Use

Even if you use AI, please use it responsibly. In case you are using AI generated code, test it thoroughly before creating a pull request. Reviewing and maintaining AI code is harder than creating it.
