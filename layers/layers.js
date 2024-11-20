ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-17945117.746806, -7956892.703546, 16198377.196719, 14506775.010000]);
var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WECintegratedBreakwaters_2 = new ol.format.GeoJSON();
var features_WECintegratedBreakwaters_2 = format_WECintegratedBreakwaters_2.readFeatures(json_WECintegratedBreakwaters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WECintegratedBreakwaters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WECintegratedBreakwaters_2.addFeatures(features_WECintegratedBreakwaters_2);
var lyr_WECintegratedBreakwaters_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WECintegratedBreakwaters_2, 
                style: style_WECintegratedBreakwaters_2,
                popuplayertitle: "WEC-integratedBreakwaters",
                interactive: true,
                title: '<img src="styles/legend/WECintegratedBreakwaters_2.png" /> WEC-integratedBreakwaters'
            });

lyr_ESRI_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_WECintegratedBreakwaters_2.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_ESRIBoundariesPlaces_1,lyr_WECintegratedBreakwaters_2];
lyr_WECintegratedBreakwaters_2.set('fieldAliases', {'Year of installation/conception': 'Year of installation/conception', 'Year of decomissioning': 'Year of decomissioning', 'Name': 'Name', 'Technology': 'Technology', 'PTO': 'PTO', 'Country': 'Country', 'City': 'City', 'Type of breakwater': 'Type of breakwater', 'Phase': 'Phase', 'Injecting(/ed) electricity in grid': 'Injecting(/ed) electricity in grid', 'Installed capacity (kW)': 'Installed capacity (kW)', 'Capture width': 'Capture width', 'Comments': 'Comments', 'Relevant papers': 'Relevant papers', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Figure': 'Figure', });
lyr_WECintegratedBreakwaters_2.set('fieldImages', {'Year of installation/conception': '', 'Year of decomissioning': '', 'Name': '', 'Technology': '', 'PTO': '', 'Country': '', 'City': '', 'Type of breakwater': '', 'Phase': '', 'Injecting(/ed) electricity in grid': '', 'Installed capacity (kW)': '', 'Capture width': '', 'Comments': '', 'Relevant papers': '', 'Latitude': '', 'Longitude': '', 'Figure': '', });
lyr_WECintegratedBreakwaters_2.set('fieldLabels', {'Year of installation/conception': 'no label', 'Year of decomissioning': 'no label', 'Name': 'no label', 'Technology': 'no label', 'PTO': 'no label', 'Country': 'no label', 'City': 'no label', 'Type of breakwater': 'no label', 'Phase': 'no label', 'Injecting(/ed) electricity in grid': 'no label', 'Installed capacity (kW)': 'no label', 'Capture width': 'no label', 'Comments': 'no label', 'Relevant papers': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Figure': 'no label', });
lyr_WECintegratedBreakwaters_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});