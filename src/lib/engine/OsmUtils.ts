import osmtogeojson from 'osmtogeojson';
import osmData from '#lib/data/osm_data.json';

export function getSampleGeoJsonData() {
	return osmtogeojson(osmData);
}
