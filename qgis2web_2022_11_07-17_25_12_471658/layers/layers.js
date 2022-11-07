var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Punggol_1 = new ol.format.GeoJSON();
var features_Punggol_1 = format_Punggol_1.readFeatures(json_Punggol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punggol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punggol_1.addFeatures(features_Punggol_1);
var lyr_Punggol_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punggol_1, 
                style: style_Punggol_1,
                interactive: true,
                title: '<img src="styles/legend/Punggol_1.png" /> Punggol'
            });
var format_PunggolPunggol_buildings_2 = new ol.format.GeoJSON();
var features_PunggolPunggol_buildings_2 = format_PunggolPunggol_buildings_2.readFeatures(json_PunggolPunggol_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunggolPunggol_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunggolPunggol_buildings_2.addFeatures(features_PunggolPunggol_buildings_2);
var lyr_PunggolPunggol_buildings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PunggolPunggol_buildings_2, 
                style: style_PunggolPunggol_buildings_2,
                interactive: true,
                title: '<img src="styles/legend/PunggolPunggol_buildings_2.png" /> Punggol — Punggol_buildings'
            });
var format_PunggolPunggol_schools_3 = new ol.format.GeoJSON();
var features_PunggolPunggol_schools_3 = format_PunggolPunggol_schools_3.readFeatures(json_PunggolPunggol_schools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunggolPunggol_schools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunggolPunggol_schools_3.addFeatures(features_PunggolPunggol_schools_3);
var lyr_PunggolPunggol_schools_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PunggolPunggol_schools_3, 
                style: style_PunggolPunggol_schools_3,
                interactive: true,
                title: '<img src="styles/legend/PunggolPunggol_schools_3.png" /> Punggol — Punggol_schools'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Punggol_1.setVisible(true);lyr_PunggolPunggol_buildings_2.setVisible(true);lyr_PunggolPunggol_schools_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Punggol_1,lyr_PunggolPunggol_buildings_2,lyr_PunggolPunggol_schools_3];
lyr_Punggol_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_PunggolPunggol_buildings_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_PunggolPunggol_schools_3.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'postal_code': 'postal_code', 'school_name': 'school_name', 'url_address': 'url_address', 'address': 'address', 'telephone_no': 'telephone_no', 'telephone_no_2': 'telephone_no_2', 'fax_no': 'fax_no', 'fax_no_2': 'fax_no_2', 'email_address': 'email_address', 'mrt_desc': 'mrt_desc', 'bus_desc': 'bus_desc', 'principal_name': 'principal_name', 'first_vp_name': 'first_vp_name', 'second_vp_name': 'second_vp_name', 'third_vp_name': 'third_vp_name', 'fourth_vp_name': 'fourth_vp_name', 'fifth_vp_name': 'fifth_vp_name', 'sixth_vp_name': 'sixth_vp_name', 'visionstatement_desc': 'visionstatement_desc', 'missionstatement_desc': 'missionstatement_desc', 'philosophy_culture_ethos': 'philosophy_culture_ethos', 'dgp_code': 'dgp_code', 'zone_code': 'zone_code', 'cluster_code': 'cluster_code', 'type_code': 'type_code', 'nature_code': 'nature_code', 'session_code': 'session_code', 'mainlevel_code': 'mainlevel_code', 'sap_ind': 'sap_ind', 'autonomous_ind': 'autonomous_ind', 'gifted_ind': 'gifted_ind', 'ip_ind': 'ip_ind', 'mothertongue1_code': 'mothertongue1_code', 'mothertongue2_code': 'mothertongue2_code', 'mothertongue3_code': 'mothertongue3_code', 'special_sdp_offered': 'special_sdp_offered', 'city': 'city', 'country': 'country', 'results.SEARCHVAL': 'results.SEARCHVAL', 'results.BLK_NO': 'results.BLK_NO', 'results.ROAD_NAME': 'results.ROAD_NAME', 'results.BUILDING': 'results.BUILDING', 'results.ADDRESS': 'results.ADDRESS', 'results.X': 'results.X', 'results.Y': 'results.Y', 'results.LATITUDE': 'results.LATITUDE', 'results.LONGITUDE': 'results.LONGITUDE', });
lyr_Punggol_1.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'SUBZONE_NO': '', 'SUBZONE_N': '', 'SUBZONE_C': '', 'CA_IND': '', 'PLN_AREA_N': '', 'PLN_AREA_C': '', 'REGION_N': '', 'REGION_C': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'snippet': '', });
lyr_PunggolPunggol_buildings_2.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_PunggolPunggol_schools_3.set('fieldImages', {'fid': '', 'field_1': '', 'postal_code': '', 'school_name': '', 'url_address': '', 'address': '', 'telephone_no': '', 'telephone_no_2': '', 'fax_no': '', 'fax_no_2': '', 'email_address': '', 'mrt_desc': '', 'bus_desc': '', 'principal_name': '', 'first_vp_name': '', 'second_vp_name': '', 'third_vp_name': '', 'fourth_vp_name': '', 'fifth_vp_name': '', 'sixth_vp_name': '', 'visionstatement_desc': '', 'missionstatement_desc': '', 'philosophy_culture_ethos': '', 'dgp_code': '', 'zone_code': '', 'cluster_code': '', 'type_code': '', 'nature_code': '', 'session_code': '', 'mainlevel_code': '', 'sap_ind': '', 'autonomous_ind': '', 'gifted_ind': '', 'ip_ind': '', 'mothertongue1_code': '', 'mothertongue2_code': '', 'mothertongue3_code': '', 'special_sdp_offered': '', 'city': '', 'country': '', 'results.SEARCHVAL': '', 'results.BLK_NO': '', 'results.ROAD_NAME': '', 'results.BUILDING': '', 'results.ADDRESS': '', 'results.X': '', 'results.Y': '', 'results.LATITUDE': '', 'results.LONGITUDE': '', });
lyr_Punggol_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_PunggolPunggol_buildings_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_PunggolPunggol_schools_3.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'postal_code': 'no label', 'school_name': 'no label', 'url_address': 'header label', 'address': 'no label', 'telephone_no': 'no label', 'telephone_no_2': 'no label', 'fax_no': 'no label', 'fax_no_2': 'no label', 'email_address': 'no label', 'mrt_desc': 'no label', 'bus_desc': 'no label', 'principal_name': 'no label', 'first_vp_name': 'no label', 'second_vp_name': 'no label', 'third_vp_name': 'no label', 'fourth_vp_name': 'no label', 'fifth_vp_name': 'no label', 'sixth_vp_name': 'no label', 'visionstatement_desc': 'no label', 'missionstatement_desc': 'no label', 'philosophy_culture_ethos': 'no label', 'dgp_code': 'no label', 'zone_code': 'no label', 'cluster_code': 'no label', 'type_code': 'no label', 'nature_code': 'no label', 'session_code': 'no label', 'mainlevel_code': 'no label', 'sap_ind': 'no label', 'autonomous_ind': 'no label', 'gifted_ind': 'no label', 'ip_ind': 'no label', 'mothertongue1_code': 'no label', 'mothertongue2_code': 'no label', 'mothertongue3_code': 'no label', 'special_sdp_offered': 'no label', 'city': 'no label', 'country': 'no label', 'results.SEARCHVAL': 'no label', 'results.BLK_NO': 'no label', 'results.ROAD_NAME': 'no label', 'results.BUILDING': 'no label', 'results.ADDRESS': 'no label', 'results.X': 'no label', 'results.Y': 'no label', 'results.LATITUDE': 'no label', 'results.LONGITUDE': 'no label', });
lyr_PunggolPunggol_schools_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});