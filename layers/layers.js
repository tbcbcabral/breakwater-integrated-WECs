ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20998275.668799, -7956892.703546, 19251535.118712, 14506775.010000]);
var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            //'type': 'base',
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
    title: 'WEC-integratedBreakwaters<br />\
    <img src="styles/legend/WECintegratedBreakwaters_2_0.png" /> Multi-reservoir OTD<br />\
    <img src="styles/legend/WECintegratedBreakwaters_2_1.png" /> Multi-reservoir OTD, OWC<br />\
    <img src="styles/legend/WECintegratedBreakwaters_2_2.png" /> Multiple oscillating bodies<br />\
<<<<<<< HEAD
    <img src="styles/legend/WECintegratedBreakwaters_2_3.png" /> OTD<br />\
    <img src="styles/legend/WECintegratedBreakwaters_2_4.png" /> OWC<br />\
    <img src="styles/legend/WECintegratedBreakwaters_2_5.png" /> Single-reservoir OTD<br />'
=======
    <img src="styles/legend/WECintegratedBreakwaters_2_3.png" /> OWC<br />\
    <img src="styles/legend/WECintegratedBreakwaters_2_4.png" /> Single-reservoir OTD<br />'
>>>>>>> fbb505c0d18767df7879344474e8aab321e272d7
        });

lyr_ESRI_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_WECintegratedBreakwaters_2.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_ESRIBoundariesPlaces_1,lyr_WECintegratedBreakwaters_2];
<<<<<<< HEAD
lyr_WECintegratedBreakwaters_2.set('fieldAliases', {'Year of installation/conception': 'Year of installation/conception', 'Year of decomissioning': 'Year of decomissioning', 'Name': 'Name', 'Technology': 'Technology', 'PTO': 'PTO', 'Country': 'Country', 'City': 'City', 'Type of breakwater': 'Type of breakwater', 'Phase': 'Phase', 'Injecting(/ed) electricity in grid': 'Injecting(/ed) electricity in grid', 'Installed capacity (kW)': 'Installed capacity (kW)', 'Capture width': 'Capture width', 'Comments': 'Comments', 'Relevant papers': 'Relevant papers', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Figure': 'Figure', });
lyr_WECintegratedBreakwaters_2.set('fieldImages', {'Year of installation/conception': 'TextEdit', 'Year of decomissioning': 'TextEdit', 'Name': 'TextEdit', 'Technology': 'TextEdit', 'PTO': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Type of breakwater': 'TextEdit', 'Phase': 'TextEdit', 'Injecting(/ed) electricity in grid': 'TextEdit', 'Installed capacity (kW)': 'TextEdit', 'Capture width': 'TextEdit', 'Comments': 'TextEdit', 'Relevant papers': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Figure': 'TextEdit', });
lyr_WECintegratedBreakwaters_2.set('fieldLabels', {'Year of installation/conception': 'header label - visible with data', 'Year of decomissioning': 'header label - visible with data', 'Name': 'header label - visible with data', 'Technology': 'header label - visible with data', 'PTO': 'header label - visible with data', 'Country': 'header label - visible with data', 'City': 'header label - visible with data', 'Type of breakwater': 'header label - visible with data', 'Phase': 'header label - visible with data', 'Injecting(/ed) electricity in grid': 'header label - visible with data', 'Installed capacity (kW)': 'header label - visible with data', 'Capture width': 'header label - visible with data', 'Comments': 'header label - visible with data', 'Relevant papers': 'header label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', 'Figure': 'no label', });
=======
lyr_WECintegratedBreakwaters_2.set('fieldAliases', {'Year of installation/conception': 'Year of installation/conception', 'Name': 'Name', 'Concept': 'Concept', 'Country': 'Country', 'City': 'City', 'Type of breakwater': 'Type of breakwater', 'Phase': 'Phase', 'Injecting(/ed) electricity in grid': 'Injecting(/ed) electricity in grid', 'Installed capacity (kW)': 'Installed capacity (kW)', 'Relevant papers': 'Relevant papers', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Figure': 'Figure', });
lyr_WECintegratedBreakwaters_2.set('fieldImages', {'Year of installation/conception': 'TextEdit', 'Name': 'TextEdit', 'Concept': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Type of breakwater': 'TextEdit', 'Phase': 'TextEdit', 'Injecting(/ed) electricity in grid': 'TextEdit', 'Installed capacity (kW)': 'TextEdit', 'Relevant papers': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Figure': 'ExternalResource', });
lyr_WECintegratedBreakwaters_2.set('fieldLabels', {'Year of installation/conception': 'inline label - always visible', 'Name': 'inline label - always visible', 'Concept': 'inline label - always visible', 'Country': 'inline label - always visible', 'City': 'inline label - always visible', 'Type of breakwater': 'inline label - always visible', 'Phase': 'inline label - always visible', 'Injecting(/ed) electricity in grid': 'inline label - always visible', 'Installed capacity (kW)': 'inline label - always visible', 'Relevant papers': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Figure': 'inline label - always visible', });
>>>>>>> fbb505c0d18767df7879344474e8aab321e272d7
lyr_WECintegratedBreakwaters_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});