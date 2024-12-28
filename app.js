// Map Initialization
const map = L.map('map', {
    center: [28.2096, 83.9856], // Centered around Pokhara 17 (Biruwa)
    zoom: 13,                    // Default zoom level for the area
    maxZoom: 17,                 // Maximum zoom level (allows zooming in)
    minZoom: 13,                 // Minimum zoom level (prevents zooming out below this level)
    maxBounds: [
        [28.16, 83.94],          // Southwest Corner of Pokhara 17 + surroundings
        [28.26, 84.03]           // Northeast Corner of Pokhara 17 + surroundings
    ],
    maxBoundsViscosity: 1.0,     // Prevents the map from panning outside of the maxBounds
    scrollWheelZoom: true        // Optional: Allows zooming using the scroll wheel
});

// Base Map Layer - OpenStreetMap
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
});
osmLayer.addTo(map);

// Sample GeoJSON Data (Replace with your JSON file path)
const geoData = [
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9721883, 28.1885867, 750.0] }, "properties": { "start": "2024-11-25T10:54:01.400+05:45", "end": "2024-11-26T22:35:46.987+05:45", "Form Number": "1", "Healthcare Facility Name": "Biruwa Medical Hall", "Address": "Birauta Chowk", "Contact No.": "9815170862", "Ownership": "Private", "Opening Hour": "06:30:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "Diploma In Pharmacy", "Full Capacity (approx)": "6", "Daily average traffic": "10", "Photo": "1732511600709.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fcaf758fd-da86-4548-902f-36b48e7427c7%2F1732511600709.jpg", "_id": 412743663, "_uuid": "103ca476-5122-4304-8405-ca1cadbb9f23", "_submission_time": "2024-11-25T14:47:27", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 1 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9685542, 28.1911693, 751.7999877929688] }, "properties": { "start": "2024-11-25T12:07:16.566+05:45", "end": "2024-11-26T22:47:14.750+05:45", "Form Number": "2", "Healthcare Facility Name": "Cabality Dental Care", "Address": "Birauta Chowk", "Contact No.": "9846224425", "Ownership": "Private", "Opening Hour": "08:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "Yes", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "4", "Staff Education": "CDH, Dr", "Full Capacity (approx)": "5", "Daily average traffic": "6", "Photo": "1732516105792.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fd3218cc2-b44a-4ea5-909e-0326cae246ef%2F1732516105792.jpg", "_id": 413025566, "_uuid": "41f8b4d5-26ff-4dd3-bb1b-184e5fb36d7c", "_submission_time": "2024-11-26T09:13:59", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 2 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9577063, 28.190516, 748.3999633789062] }, "properties": { "start": "2024-11-25T12:29:31.932+05:45", "end": "2024-11-26T22:46:54.020+05:45", "Form Number": "3", "Healthcare Facility Name": "Mandeep Pharmacy", "Address": "Chhorepatan", "Contact No.": "9846034039", "Ownership": "Private", "Opening Hour": "08:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "Yes", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "HA + B. Pharm", "Full Capacity (approx)": "5", "Daily average traffic": "5", "Photo": "1732517469704.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F0a7ce75b-d0c8-473d-a842-aef40bb21880%2F1732517469704.jpg", "_id": 413025789, "_uuid": "8d8db6f3-3f83-4240-9f61-7e3ca09a091a", "_submission_time": "2024-11-26T09:14:29", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 3 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9553814, 28.187063, 733.7000122070312] }, "properties": { "start": "2024-11-25T12:47:26.367+05:45", "end": "2024-11-26T20:00:23.227+05:45", "Form Number": "4", "Healthcare Facility Name": "Sabarina Pharmacy", "Address": "Belghari", "Contact No.": "061-465086", "Ownership": "Private", "Opening Hour": "08:30:00.000+05:45", "Closing hour": "19:30:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "Diploma in Pharmacy", "Full Capacity (approx)": "3", "Daily average traffic": "8", "Photo": "1732518373056.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fff054366-e379-4ceb-bbe2-07ab735d0e88%2F1732518373056.jpg", "_id": 413042485, "_uuid": "928d48ac-5a0e-427f-8b46-a5fa999849d3", "_submission_time": "2024-11-26T09:53:58", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 4 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9565885, 28.1894583, 733.5999755859375] }, "properties": { "start": "2024-11-25T13:00:42.519+05:45", "end": "2024-11-26T20:01:40.188+05:45", "Form Number": "5", "Healthcare Facility Name": "Tibetan Medical and Astro", "Address": "Chhorepatan", "Contact No.": "061-467637", "Ownership": "Private", "Opening Hour": "08:30:00.000+05:45", "Closing hour": "16:30:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "4", "No. of Staff": "4", "Staff Education": "Kachupa degree", "Full Capacity (approx)": "20", "Daily average traffic": "2", "Photo": "1732519264685.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F1856d32c-90ae-4587-b661-4bea32ec2776%2F1732519264685.jpg", "_id": 413042496, "_uuid": "a9248824-52f9-4784-97ed-70a9dec8b35f", "_submission_time": "2024-11-26T09:54:00", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 5 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9549508, 28.1909903, 737.7000122070312] }, "properties": { "start": "2024-11-25T13:17:53.973+05:45", "end": "2024-11-26T22:46:30.571+05:45", "Form Number": "6", "Healthcare Facility Name": "Aayug Health Care", "Address": "Chhorepatan", "Contact No.": "9846311460", "Ownership": "Private", "Opening Hour": "06:30:00.000+05:45", "Closing hour": "21:30:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "2", "No. of Staff": "1", "Staff Education": "B.Pharm", "Full Capacity (approx)": "4", "Daily average traffic": "20", "Photo": "1732520028225.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fbd039eb6-7624-4d69-8e6f-fda7882f3d03%2F1732520028225.jpg", "_id": 413042507, "_uuid": "603296cf-d3c4-4cf4-9982-92cc3fcf383e", "_submission_time": "2024-11-26T09:54:02", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 6 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9537918, 28.1912281, 738.3999633789062] }, "properties": { "start": "2024-11-25T13:21:52.810+05:45", "end": "2024-11-26T22:46:04.023+05:45", "Form Number": "7", "Healthcare Facility Name": "Pahichan Pharmacy", "Address": "Chhorepatan", "Contact No.": "9856033154", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "19:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "B.Pharm", "Full Capacity (approx)": "3", "Daily average traffic": "4", "Photo": "1732520431540.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F95e6e84f-2c71-4e61-800a-5cdb83236274%2F1732520431540.jpg", "_id": 413042518, "_uuid": "b7888638-e7a3-4779-a97f-f9ba672ab9b5", "_submission_time": "2024-11-26T09:54:04", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 7 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9533135, 28.191518, 738.8999633789062] }, "properties": { "start": "2024-11-25T13:26:56.672+05:45", "end": "2024-11-26T22:44:56.709+05:45", "Form Number": "8", "Healthcare Facility Name": "Kristi Manakamana Pharmacy", "Address": "Chhorepatan", "Contact No.": "9846031270", "Ownership": "Private", "Opening Hour": "08:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "2", "Staff Education": "B.Pharm", "Full Capacity (approx)": "3", "Daily average traffic": "12", "Photo": "1732520716736.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F17540941-a795-48f7-89ce-8366df2b44b3%2F1732520716736.jpg", "_id": 413042626, "_uuid": "7c42e535-ec62-48a5-b797-397357d3857c", "_submission_time": "2024-11-26T09:54:20", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 8 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.958208, 28.1898871, 732.5] }, "properties": { "start": "2024-11-25T13:52:40.071+05:45", "end": "2024-11-26T22:44:30.475+05:45", "Form Number": "9", "Healthcare Facility Name": "Prisha Medico Pharma", "Address": "Chhorepatan", "Contact No.": "9846626115", "Ownership": "Private", "Opening Hour": "06:30:00.000+05:45", "Closing hour": "21:30:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "5", "Staff Education": "HA, CMA", "Full Capacity (approx)": "20", "Daily average traffic": "80", "Photo": "1732522292876.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F86d668ba-f0f0-4019-8ea5-e9341a0db38a%2F1732522292876.jpg", "_id": 413042637, "_uuid": "79cfe4af-dbf8-4f45-a69d-21712aad0902", "_submission_time": "2024-11-26T09:54:22", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 9 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9580918, 28.18999, 732.2999877929688] }, "properties": { "start": "2024-11-25T13:58:25.920+05:45", "end": "2024-11-26T22:43:18.865+05:45", "Form Number": "10", "Healthcare Facility Name": "Asia Oral and Dental Care", "Address": "Chhorepatan", "Contact No.": "9846148775", "Ownership": "Private", "Opening Hour": "08:30:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "2", "No. of Staff": "2", "Staff Education": "Dental Surgeon, Dental Hygienist, Helper", "Full Capacity (approx)": "2", "Daily average traffic": "3", "Photo": "1732522540602.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F0e3e577f-1912-4c04-b952-57afd1143d94%2F1732522540602.jpg", "_id": 413042655, "_uuid": "8bdc3820-08d8-4b0d-844b-3544c0d627f0", "_submission_time": "2024-11-26T09:54:24", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 10 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9619549, 28.1874971, 740.7000122070312] }, "properties": { "start": "2024-11-25T14:12:21.465+05:45", "end": "2024-11-26T20:10:34.113+05:45", "Form Number": "11", "Healthcare Facility Name": "Tablet Pharmacy", "Address": "Birauta Chowk", "Contact No.": "9856011420", "Ownership": "Private", "Opening Hour": "07:30:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "B.Pharm", "Full Capacity (approx)": "4", "Daily average traffic": "5", "Photo": "1732523437991.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F5e187a7e-3606-44a0-8b7c-30ba98e8cefa%2F1732523437991.jpg", "_id": 413042666, "_uuid": "cf6144f9-57a2-4712-ac93-e1fef08e1d8c", "_submission_time": "2024-11-26T09:54:26", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 11 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9641026, 28.1863045, 914.5999755859375] }, "properties": { "start": "2024-11-25T14:19:06.291+05:45", "end": "2024-11-26T20:12:13.273+05:45", "Form Number": "12", "Healthcare Facility Name": "Orchit Pharmacy", "Address": "Birauta Chowk", "Contact No.": "9856038770", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "2", "Staff Education": "CMA + Diploma in Pharmacy", "Full Capacity (approx)": "3", "Daily average traffic": "15", "Photo": "1732523922184.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F7f13fe4b-1643-4779-aee1-1c66b425f32b%2F1732523922184.jpg", "_id": 413042684, "_uuid": "e4071f76-3947-4474-9b63-b44f2a94763b", "_submission_time": "2024-11-26T09:54:28", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 12 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9698926, 28.1891867, 749.2000122070312] }, "properties": { "start": "2024-11-25T14:39:48.170+05:45", "end": "2024-11-26T20:13:24.486+05:45", "Form Number": "13", "Healthcare Facility Name": "Razy Medical Hall", "Address": "Birauta Chowk", "Contact No.": "9846889031", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "Yes", "If yes, how many?": "1", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "Asst Pharmacy and CIB", "Full Capacity (approx)": "3", "Daily average traffic": "15", "Photo": "1732525108556.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F7ec588b6-2625-405f-a780-12e4233893b2%2F1732525108556.jpg", "_id": 413042698, "_uuid": "56bdcfc3-8bec-4993-944b-10c1861b8079", "_submission_time": "2024-11-26T09:54:30", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 13 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9701327, 28.1904735, 750.5] }, "properties": { "start": "2024-11-25T14:45:49.659+05:45", "end": "2024-11-26T22:42:51.399+05:45", "Form Number": "14", "Healthcare Facility Name": "Medilife Pharmacy", "Address": "Birauta Chowk", "Contact No.": "9856041693", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "3", "No. of Staff": "2", "Staff Education": "B.Pharm, CMA", "Full Capacity (approx)": "4", "Daily average traffic": "25", "Photo": "1732525483411.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F58d83eab-869f-4749-97ec-9a2df2e37ef2%2F1732525483411.jpg", "_id": 413042711, "_uuid": "bc2d3e3d-8a23-48e8-bd0e-1ea8541c30e1", "_submission_time": "2024-11-26T09:54:32", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 14 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9693282, 28.1917495, 751.7999877929688] }, "properties": { "start": "2024-11-25T14:52:35.099+05:45", "end": "2024-11-26T22:42:23.751+05:45", "Form Number": "15", "Healthcare Facility Name": "Citizen Pharmacy", "Address": "Birauta Chowk", "Contact No.": "061-460470", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "B.Pharm", "Full Capacity (approx)": "3", "Daily average traffic": "35", "Photo": "1732525874072.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F62bfce4e-dd63-46e7-8a53-45054d9a4f8f%2F1732525874072.jpg", "_id": 413042720, "_uuid": "2de97c26-8be3-496e-949a-3872e6d77ebf", "_submission_time": "2024-11-26T09:54:33", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 15 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9693572, 28.1916973, 751.8999633789062] }, "properties": { "start": "2024-11-25T14:57:18.949+05:45", "end": "2024-11-26T22:41:23.186+05:45", "Form Number": "16", "Healthcare Facility Name": "Galaxy Dental Care", "Address": "Birauta Chowk", "Contact No.": "061-590827", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "Yes", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "3", "Staff Education": "Dental surgeon, Dental Hygienist, Cleaner", "Full Capacity (approx)": "4", "Daily average traffic": "6", "Photo": "1732526158773.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F8be92047-066d-4036-95b8-00885deae689%2F1732526158773.jpg", "_id": 413042745, "_uuid": "a2c41ce9-4bb6-4f32-908f-60ae8127497f", "_submission_time": "2024-11-26T09:54:36", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 16 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9703559, 28.1918153, 752.2000122070312] }, "properties": { "start": "2024-11-26T09:07:42.965+05:45", "end": "2024-11-26T22:41:00.404+05:45", "Form Number": "17", "Healthcare Facility Name": "Birauta medico pharmacy", "Address": "Birauta Chowk", "Contact No.": "9856031090", "Ownership": "Private", "Opening Hour": "07:30:00.000+05:45", "Closing hour": "19:30:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "CMA + pharmacist's", "Full Capacity (approx)": "5", "Daily average traffic": "60", "Photo": "1732591606154.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F95fdbc3b-3e6a-4129-b081-734c4aff93ea%2F1732591606154.jpg", "_id": 413042756, "_uuid": "7bccaad5-ef37-4aa0-82bf-9d4d8d32cc75", "_submission_time": "2024-11-26T09:54:37", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 17 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9726531, 28.1906246, 753.8999633789062] }, "properties": { "start": "2024-11-26T09:24:24.022+05:45", "end": "2024-11-26T22:40:35.572+05:45", "Form Number": "18", "Healthcare Facility Name": "Ashim Medical Hall", "Address": "Birauta Chowk", "Contact No.": "9846157304", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:30:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "Diploma in Pharmacy + CMA", "Full Capacity (approx)": "2", "Daily average traffic": "7", "Photo": "1732592530904.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F2092ff83-c267-4c9e-9297-e6c921271a42%2F1732592530904.jpg", "_id": 413042767, "_uuid": "f5a2a178-8670-4150-a0f5-be4e4c712f11", "_submission_time": "2024-11-26T09:54:39", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 18 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9771403, 28.1917711, 759.0999755859375] }, "properties": { "start": "2024-11-26T09:41:08.262+05:45", "end": "2024-11-26T22:40:05.675+05:45", "Form Number": "19", "Healthcare Facility Name": "Pushpa Medical Hall", "Address": "Birauta Chowk", "Contact No.": "9846035259", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "19:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "CMA", "Full Capacity (approx)": "2", "Daily average traffic": "7", "Photo": "1732593532068.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fda11c52b-3138-4bc4-b6de-52d2acb7e2a1%2F1732593532068.jpg", "_id": 413042785, "_uuid": "da984f37-8697-4928-9d26-c0353302a2e7", "_submission_time": "2024-11-26T09:54:41", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 19 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9753903, 28.1874769, 750.7999877929688] }, "properties": { "start": "2024-11-26T09:51:06.737+05:45", "end": "2024-11-26T20:19:25.550+05:45", "Form Number": "20", "Healthcare Facility Name": "Tulashi Pharmacy", "Address": "Birauta Chowk", "Contact No.": "9867887979", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "CMA + HA", "Full Capacity (approx)": "3", "Daily average traffic": "15", "Photo": "1732594181303.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fbdd4c94f-e87f-4f78-9025-c1a49c63dc72%2F1732594181303.jpg", "_id": 413042804, "_uuid": "fc16cbbf-c6ba-415e-9e63-b8a6db7a7436", "_submission_time": "2024-11-26T09:54:44", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 20 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9896492, 28.1794481, 719.7000122070312] }, "properties": { "start": "2024-11-26T11:11:27.426+05:45", "end": "2024-11-26T20:20:37.947+05:45", "Form Number": "21", "Healthcare Facility Name": "Dirghayu Medical Hall", "Address": "Mahatgauda", "Contact No.": "9846858077", "Ownership": "Private", "Opening Hour": "06:00:00.000+05:45", "Closing hour": "19:30:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Primary Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "Orientation Training", "Full Capacity (approx)": "2", "Daily average traffic": "10", "Photo": "1732598976046.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Ffb3d6cf1-1a89-49d4-9213-c08379263e14%2F1732598976046.jpg", "_id": 413042815, "_uuid": "9ab573a3-7b4b-4aca-9e82-8d9ef5210640", "_submission_time": "2024-11-26T09:54:45", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 21 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9724627, 28.1932279, 782.0] }, "properties": { "start": "2024-11-25T10:49:47.514+05:45", "end": "2024-11-26T20:25:15.514+05:45", "Form Number": "22", "Healthcare Facility Name": "Noble Children and Women Hospital and Trauma Centre Pvt.Ltd", "Address": "Birauta Chowk", "Contact No.": "061-590142", "Ownership": "Private", "Opening Hour": "00:00:00.000+05:45", "Closing hour": "00:00:00.000+05:45", "Type of Healthcare Facility": "Hospital", "Type of Treatment": "Tertiary", "Emergency Services": "Yes", "Wheelchair availability": "Yes", "If yes, how many?": "2", "No. of Beds": "32", "No. of Staff": "32", "Staff Education": "pcl and bsc", "Full Capacity (approx)": "15", "Daily average traffic": "25", "Photo": "1732511742209.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F60cb0eef-0fe8-4e47-bcf3-ce072d840d0c%2F1732511742209.jpg", "_id": 413169873, "_uuid": "a908894e-409a-4560-b994-44252b191ff8", "_submission_time": "2024-11-26T14:06:19", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 22 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9722697, 28.1931758, 753.0] }, "properties": { "start": "2024-11-25T11:09:35.831+05:45", "end": "2024-11-26T22:39:30.426+05:45", "Form Number": "23", "Healthcare Facility Name": "Namaste Hospital and Research Center Pvt.Ltd", "Address": "Birauta Chowk", "Contact No.": "061-456438, 061-456439", "Ownership": "Private", "Opening Hour": "00:00:00.000+05:45", "Closing hour": "00:00:00.000+05:45", "Type of Healthcare Facility": "Hospital", "Type of Treatment": "Tertiary", "Emergency Services": "Yes", "Wheelchair availability": "Yes", "If yes, how many?": "4", "No. of Beds": "8", "No. of Staff": "10", "Staff Education": "Pcl,Bsc,Dr", "Full Capacity (approx)": "15", "Daily average traffic": "30", "Photo": "1732513082507.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F2a331e8e-7666-4331-a57d-ab877809a99f%2F1732513082507.jpg", "_id": 413169894, "_uuid": "9082691e-f949-459e-94d4-7955689eae24", "_submission_time": "2024-11-26T14:06:22", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 23 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9735583, 28.1947387, 776.0] }, "properties": { "start": "2024-11-25T11:27:03.601+05:45", "end": "2024-11-26T20:27:00.877+05:45", "Form Number": "24", "Healthcare Facility Name": "Right Care Pokhara Pvt.Ltd", "Address": "Himali Tole", "Contact No.": "9856080568", "Ownership": "Private", "Opening Hour": "06:30:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Medicine only Secondary Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "2", "No. of Staff": "2", "Staff Education": "Cma, diploma in pharmacy", "Full Capacity (approx)": "3", "Daily average traffic": "15", "Photo": "1732513650365.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Ffdf30832-58f4-433f-b9bf-75bdf93489b0%2F1732513650365.jpg", "_id": 413169951, "_uuid": "854cc62c-47bb-434a-ad07-21442e90c8e3", "_submission_time": "2024-11-26T14:06:31", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 24 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9745953, 28.1965174, 775.0] }, "properties": { "start": "2024-11-25T11:47:15.351+05:45", "end": "2024-11-26T20:27:39.291+05:45", "Form Number": "25", "Healthcare Facility Name": "Patient Care Pharmacy", "Address": "Mustang Chowk", "Contact No.": "9709405698", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "3", "Staff Education": "B.pharm and d.pharm", "Full Capacity (approx)": "5", "Daily average traffic": "50", "Photo": "1732514789820.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F723a8c61-3818-4842-b6f3-388d54ba3ca7%2F1732514789820.jpg", "_id": 413170096, "_uuid": "97f5f328-2412-40bb-833f-df22dec0ee07", "_submission_time": "2024-11-26T14:06:51", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 25 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9750096, 28.1975884, 747.0] }, "properties": { "start": "2024-11-25T11:54:07.428+05:45", "end": "2024-11-26T20:28:31.955+05:45", "Form Number": "26", "Healthcare Facility Name": "Puja Medical Hall", "Address": "Mustang Chowk", "Contact No.": "9806675367", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "12+ CMA", "Full Capacity (approx)": "3", "Daily average traffic": "20", "Photo": "1732515120355.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F9b74f789-6288-4167-8858-30603260abe8%2F1732515120355.jpg", "_id": 413170209, "_uuid": "a2286083-4f98-4e4a-9f0e-2f5e1da32040", "_submission_time": "2024-11-26T14:07:03", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 26 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9751731, 28.1985748, 759.0] }, "properties": { "start": "2024-11-25T12:00:53.444+05:45", "end": "2024-11-26T20:29:07.387+05:45", "Form Number": "27", "Healthcare Facility Name": "Pulse Med Pharmacy", "Address": "Mustang Chowk", "Contact No.": "9862596742", "Ownership": "Private", "Opening Hour": "06:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "B.pharm", "Full Capacity (approx)": "3", "Daily average traffic": "25", "Photo": "1732515544972.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F215047d6-1e02-4d3b-9c4d-d27866867461%2F1732515544972.jpg", "_id": 413170777, "_uuid": "be736e0d-7f6b-4a33-95df-e8b6a53378ae", "_submission_time": "2024-11-26T14:08:02", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 27 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9758553, 28.1933979, 783.0] }, "properties": { "start": "2024-11-25T13:41:35.310+05:45", "end": "2024-11-26T20:29:52.184+05:45", "Form Number": "28", "Healthcare Facility Name": "Resunga Medical Pharma", "Address": "Himali Tole", "Contact No.": "9856002341", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "B.pharma", "Daily average traffic": "25", "Photo": "1732521640715.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F7f831062-422f-4bf5-bff0-1e3f3b7df7b9%2F1732521640715.jpg", "_id": 413179624, "_uuid": "2fd34bf4-3c82-49c5-904d-576629d72335", "_submission_time": "2024-11-26T14:23:43", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 28 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9760763, 28.193492, 789.0] }, "properties": { "start": "2024-11-25T13:46:39.306+05:45", "end": "2024-11-26T20:31:28.230+05:45", "Form Number": "29", "Healthcare Facility Name": "Romani Medical Hall", "Address": "Himali Tole", "Contact No.": "9817178193", "Ownership": "Private", "Opening Hour": "08:30:00.000+05:45", "Closing hour": "19:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "B.pharma", "Daily average traffic": "20", "Photo": "1732521890619.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Ff8fe309b-d86d-4452-bb0e-58a0f78c4876%2F1732521890619.jpg", "_id": 413179659, "_uuid": "b0ce44d4-0469-401f-bc9b-364076ceec53", "_submission_time": "2024-11-26T14:23:47", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 29 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9782421, 28.1928173, 749.0] }, "properties": { "start": "2024-11-25T14:24:17.569+05:45", "end": "2024-11-26T20:31:59.275+05:45", "Form Number": "30", "Healthcare Facility Name": "Gharipatan Pharmacy", "Address": "Gharipatan", "Contact No.": "9816143852", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "HA", "Daily average traffic": "15", "Photo": "1732524168139.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fd73e0f6e-9be7-4bac-86b2-6545197d304b%2F1732524168139.jpg", "_id": 413179721, "_uuid": "9a95bf56-6ced-4204-a57a-adbcf31e4336", "_submission_time": "2024-11-26T14:23:54", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 30 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9770108, 28.1915703, 756.0] }, "properties": { "start": "2024-11-25T14:52:10.557+05:45", "end": "2024-11-26T20:32:55.474+05:45", "Form Number": "31", "Healthcare Facility Name": "Nepal Netrajyoti Sangha, Himalaya Eye Hospital", "Address": "Gharipatan", "Contact No.": "061-451168", "Ownership": "Others", "Opening Hour": "08:45:00.000+05:45", "Closing hour": "14:00:00.000+05:45", "Type of Healthcare Facility": "Hospital Pharmacy", "Type of Treatment": "Medicine only Tertiary", "Emergency Services": "Yes", "Wheelchair availability": "Yes", "If yes, how many?": "10", "No. of Beds": "51", "No. of Staff": "110", "Staff Education": "Bachelor and masters", "Full Capacity (approx)": "800", "Daily average traffic": "650", "Photo": "1732526169570.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F7f7e110b-b314-4135-b82e-341698d432d8%2F1732526169570.jpg", "_id": 413179776, "_uuid": "6acbcd92-338c-4556-83b1-cc1ede62d5e8", "_submission_time": "2024-11-26T14:24:01", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 31 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.977148, 28.192391, 769.0] }, "properties": { "start": "2024-11-25T15:04:43.112+05:45", "end": "2024-11-26T20:33:38.239+05:45", "Form Number": "32", "Healthcare Facility Name": "Gorkha Sahi Medical Hall", "Address": "Gharipatan", "Contact No.": "9846216400", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "D.pharma", "Daily average traffic": "50", "Photo": "1732526774961.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F700caf51-9a28-42ec-af26-7cf2b6b79a64%2F1732526774961.jpg", "_id": 413179830, "_uuid": "9b7f7609-ad1d-4401-b3ca-7c3b19ebaccd", "_submission_time": "2024-11-26T14:24:07", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 32 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9710279, 28.1921688, 781.0] }, "properties": { "start": "2024-11-25T15:30:02.461+05:45", "end": "2024-11-26T20:34:22.420+05:45", "Form Number": "33", "Healthcare Facility Name": "Rainbow Dental Home", "Address": "Birauta Chowk", "Contact No.": "061-591582", "Ownership": "Private", "Opening Hour": "09:00:00.000+05:45", "Closing hour": "18:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "3", "Staff Education": "BDS, Dental hygienist", "Full Capacity (approx)": "20", "Daily average traffic": "12", "Photo": "1732528110004.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F88dc1951-2f96-4981-918a-85b74a43bf8f%2F1732528110004.jpg", "_id": 413179895, "_uuid": "13722f25-f968-4c0e-a546-8b4629371b81", "_submission_time": "2024-11-26T14:24:17", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 33 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9706723, 28.1920448, 790.0] }, "properties": { "start": "2024-11-25T15:34:52.009+05:45", "end": "2024-11-26T20:35:27.851+05:45", "Form Number": "34", "Healthcare Facility Name": "Sujal Medical", "Address": "Birauta Chowk", "Contact No.": "9846118248", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "2", "Staff Education": "D.pharma and b.lab technician", "Daily average traffic": "50", "Photo": "1732528416687.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fea85d685-2585-4258-8021-ebcc5cec2ba7%2F1732528416687.jpg", "_id": 413179964, "_uuid": "ddb1192b-fd5e-4f92-b315-78b9b3536a9c", "_submission_time": "2024-11-26T14:24:25", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 34 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9703902, 28.1920713, 782.0] }, "properties": { "start": "2024-11-25T15:42:59.270+05:45", "end": "2024-11-26T20:36:21.064+05:45", "Form Number": "35", "Healthcare Facility Name": "Bindabasni Dental Care", "Address": "Birauta Chowk", "Contact No.": "061-451967", "Ownership": "Private", "Opening Hour": "08:00:00.000+05:45", "Closing hour": "18:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "3", "Staff Education": "Bds,bachelor", "Full Capacity (approx)": "15", "Daily average traffic": "10", "Photo": "1732529133634.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F29c00526-a35a-49e7-bff4-604c070fdbb7%2F1732529133634.jpg", "_id": 413180014, "_uuid": "336f2e45-d403-4ad7-8169-6e14c674fbb7", "_submission_time": "2024-11-26T14:24:31", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 35 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9706105, 28.1912379, 751.5] }, "properties": { "start": "2024-11-26T09:23:51.888+05:45", "end": "2024-11-26T20:37:02.095+05:45", "Form Number": "36", "Healthcare Facility Name": "Shirisha Medico Pharm", "Address": "Birauta Chowk", "Contact No.": "9846563237", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "D.pharm", "Daily average traffic": "25", "Photo": "1732592605212.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F4010d2da-23b6-4e33-8a76-6cc046318371%2F1732592605212.jpg", "_id": 413180045, "_uuid": "a424af0c-dd17-4ddb-8d46-e7aaef1b1f8b", "_submission_time": "2024-11-26T14:24:35", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 36 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.973339, 28.186962, 762.0] }, "properties": { "start": "2024-11-26T09:40:17.117+05:45", "end": "2024-11-26T20:37:46.241+05:45", "Form Number": "37", "Healthcare Facility Name": "Bishal Dental Clinic", "Address": "Biruwa Marga", "Contact No.": "9856038942", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "BDS", "Full Capacity (approx)": "10", "Daily average traffic": "3", "Photo": "1732594603725.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Ffe6ddb53-0a63-490b-a359-03001676f269%2F1732594603725.jpg", "_id": 413180058, "_uuid": "a3258784-247b-487e-86a6-5df88023ec7d", "_submission_time": "2024-11-26T14:24:38", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 37 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9735184, 28.1867928, 750.7999877929688] }, "properties": { "start": "2024-11-26T09:45:27.375+05:45", "end": "2024-11-26T20:38:42.823+05:45", "Form Number": "38", "Healthcare Facility Name": "Sewa Medical Pharma", "Address": "Biruwa Marga", "Contact No.": "9819127404", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "D.pharma", "Daily average traffic": "25", "Photo": "1732593873404.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F736b8dab-3837-46df-b4ed-e8e200a8722e%2F1732593873404.jpg", "_id": 413180085, "_uuid": "bf018ae0-8626-4b3a-be1d-ab3ddbc67bee", "_submission_time": "2024-11-26T14:24:41", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 38 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9735127, 28.1867166, 751.0] }, "properties": { "start": "2024-11-26T09:49:58.133+05:45", "end": "2024-11-26T20:39:26.321+05:45", "Form Number": "39", "Healthcare Facility Name": "Sewa Dental Clinic", "Address": "Biruwa Marga", "Contact No.": "9846483977", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "Bds", "Full Capacity (approx)": "12", "Daily average traffic": "3", "Photo": "1732594243216.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fc93e0871-17b8-4ab9-92c9-0ae4cbee39d9%2F1732594243216.jpg", "_id": 413180108, "_uuid": "9608c79b-12b1-4e7c-8cec-1cab2333cf9e", "_submission_time": "2024-11-26T14:24:45", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 39 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9747656, 28.1850971, 762.0] }, "properties": { "start": "2024-11-26T10:05:47.637+05:45", "end": "2024-11-26T20:40:07.267+05:45", "Form Number": "40", "Healthcare Facility Name": "Pramis Pharmacy", "Address": "Biruwa Marga", "Contact No.": "9856075366", "Ownership": "Private", "Opening Hour": "08:00:00.000+05:45", "Closing hour": "19:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "ANM and D.pharma", "Daily average traffic": "20", "Photo": "1732595069618.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fd0d14e1f-b154-4f20-81c9-61b2ac3d0abc%2F1732595069618.jpg", "_id": 413180128, "_uuid": "cbb1ac59-9ea6-40c4-9106-6aa0119bedd6", "_submission_time": "2024-11-26T14:24:49", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 40 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9821572, 28.183683, 761.0] }, "properties": { "start": "2024-11-26T10:42:59.544+05:45", "end": "2024-11-26T20:40:54.016+05:45", "Form Number": "41", "Healthcare Facility Name": "Urban Health Center", "Address": "Aadarsha Tole", "Contact No.": "9746307017", "Ownership": "Public", "Opening Hour": "10:00:00.000+05:45", "Closing hour": "17:00:00.000+05:45", "Type of Treatment": "Medicine only Primary", "Emergency Services": "Yes", "Wheelchair availability": "Yes", "If yes, how many?": "1", "No. of Beds": "3", "No. of Staff": "3", "Staff Education": "Ahw, anm, bachelor in public health", "Daily average traffic": "45", "Photo": "1732597695175.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F79af4737-b538-4482-b894-b4b4aebf0fc1%2F1732597695175.jpg", "_id": 413180157, "_uuid": "0d4c9e98-3623-457c-8165-d0b16c691577", "_submission_time": "2024-11-26T14:24:53", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 41 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9903995, 28.1778362, 716.0] }, "properties": { "start": "2024-11-26T11:37:20.289+05:45", "end": "2024-11-26T20:41:37.479+05:45", "Form Number": "42", "Healthcare Facility Name": "Miracle Pharmacy", "Address": "Mahatgauda", "Contact No.": "9840778636", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:30:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Medicine only Primary", "Emergency Services": "Yes", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "2", "Staff Education": "D.pharm, HA, Anesthesia Assistant", "Full Capacity (approx)": "3", "Daily average traffic": "10", "Photo": "1732600567618.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fa5600140-aebe-4d5f-84cb-4faa31612a25%2F1732600567618.jpg", "_id": 413180177, "_uuid": "d625a901-dfee-4b45-9535-8f571c3485f6", "_submission_time": "2024-11-26T14:24:57", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 42 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9719978, 28.1926249, 755.7000122070312] }, "properties": { "start": "2024-11-26T13:19:09.076+05:45", "end": "2024-11-26T20:42:08.179+05:45", "Form Number": "43", "Healthcare Facility Name": "Himchuli Pharma", "Address": "Birauta Chowk", "Contact No.": "9846638837", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only Primary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "2", "Staff Education": "CMA and D.pharma", "Daily average traffic": "35", "Photo": "1732606709442.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F90f430f5-8823-45eb-bfe5-be54f69d1e66%2F1732606709442.jpg", "_id": 413180193, "_uuid": "7ad589dd-a1e9-4173-92b5-5a8e909fa33b", "_submission_time": "2024-11-26T14:25:11", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 43 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9713287, 28.1924589, 754.0999755859375] }, "properties": { "start": "2024-11-26T13:31:46.930+05:45", "end": "2024-11-26T20:43:09.176+05:45", "Form Number": "44", "Healthcare Facility Name": "Dev Pharmacy", "Address": "Birauta chowk", "Contact No.": "9856065535", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "1", "Staff Education": "D.pharm", "Daily average traffic": "100", "Photo": "1732607917138.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F580ee734-d7b7-489c-8053-cf518fb92248%2F1732607917138.jpg", "_id": 413180287, "_uuid": "4fb76790-a3fe-4519-b617-a6746608e318", "_submission_time": "2024-11-26T14:25:18", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 44 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9712601, 28.192508, 754.0999755859375] }, "properties": { "start": "2024-11-26T13:37:37.039+05:45", "end": "2024-11-26T20:43:37.789+05:45", "Form Number": "45", "Healthcare Facility Name": "Birauta Dental Clinic", "Address": "Birauta Chowk", "Contact No.": "9846048219", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "2", "Staff Education": "BDS", "Full Capacity (approx)": "10", "Daily average traffic": "5", "Photo": "1732607773462.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F69252ce5-9c54-473e-b854-086a82bd2767%2F1732607773462.jpg", "_id": 413180374, "_uuid": "4ffdc2c7-e6bc-4557-be0b-424f9ad236b6", "_submission_time": "2024-11-26T14:25:30", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 45 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9708697, 28.200506, 770.0] }, "properties": { "start": "2024-11-25T12:12:08.403+05:45", "end": "2024-11-26T20:44:17.639+05:45", "Form Number": "46", "Healthcare Facility Name": "Suprim Pharmacy", "Address": "Rastra Bank Chowk", "Contact No.": "9846043590", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "B.pharma", "Full Capacity (approx)": "5", "Daily average traffic": "25", "Photo": "1732516247602.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F5471e997-23ef-494b-93cb-b1415e12ff30%2F1732516247602.jpg", "_id": 413180764, "_uuid": "3a0ae439-564d-4232-8bee-ad4d28f65bd5", "_submission_time": "2024-11-26T14:26:11", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 46 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9708971, 28.2003866, 769.0] }, "properties": { "start": "2024-11-25T12:16:22.411+05:45", "end": "2024-11-26T20:45:03.137+05:45", "Form Number": "47", "Healthcare Facility Name": "Bardan Medical Hall", "Address": "Rastra Bank Chowk", "Contact No.": "9846042367", "Ownership": "Private", "Opening Hour": "08:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "Pcl , pharma orientation training", "Daily average traffic": "40", "Photo": "1732516548282.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fc07a7317-7bc5-4ac8-be8b-ef28acea60b8%2F1732516548282.jpg", "_id": 413180796, "_uuid": "271ce1da-a7d4-498a-9fef-ce6d6b13d867", "_submission_time": "2024-11-26T14:26:15", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 47 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9701693, 28.1953775, 767.0] }, "properties": { "start": "2024-11-25T12:31:37.360+05:45", "end": "2024-11-26T20:46:00.781+05:45", "Form Number": "48", "Healthcare Facility Name": "Goodlife Pharmacy", "Address": "Damside Chowk", "Contact No.": "9847596614", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "22:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "D.pharma, HA", "Daily average traffic": "35", "Photo": "1732517407372.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fcc248ced-0bc4-42e8-ae2a-a3626f4380ca%2F1732517407372.jpg", "_id": 413180836, "_uuid": "847e096f-443f-4148-b3c9-3c8483133b42", "_submission_time": "2024-11-26T14:26:18", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 48 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9713793, 28.1923559, 773.0] }, "properties": { "start": "2024-11-25T13:10:33.934+05:45", "end": "2024-11-26T20:46:40.247+05:45", "Form Number": "49", "Healthcare Facility Name": "Shuva Prabhat Pharmacy", "Address": "Birauta Chowk", "Contact No.": "9856031841", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "20:00:00.000+05:45", "Type of Healthcare Facility": "Pharmacy", "Type of Treatment": "Medicine only", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "0", "No. of Staff": "2", "Staff Education": "D.pharma", "Daily average traffic": "40", "Photo": "1732519778344.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F8b29f9c1-5a3a-411f-8070-80bdd60e47c8%2F1732519778344.jpg", "_id": 413180890, "_uuid": "560ef6f7-13b0-4053-a672-89965c631c48", "_submission_time": "2024-11-26T14:26:23", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 49 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9719692, 28.192602, 765.0] }, "properties": { "start": "2024-11-25T13:16:36.895+05:45", "end": "2024-11-26T20:47:33.662+05:45", "Form Number": "50", "Healthcare Facility Name": "New Syangja Dental Service", "Address": "Birauta Chowk", "Contact No.": "9846324779", "Ownership": "Private", "Opening Hour": "10:00:00.000+05:45", "Closing hour": "17:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Secondary", "Emergency Services": "No", "Wheelchair availability": "No", "No. of Beds": "1", "No. of Staff": "1", "Staff Education": "D.dental", "Full Capacity (approx)": "1", "Daily average traffic": "5", "Photo": "1732520126556.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2F04bb2601-5488-4ad3-b444-d8927f592b93%2F1732520126556.jpg", "_id": 413180919, "_uuid": "69a6fbe0-76a6-4cc8-a322-9f0c1e807a90", "_submission_time": "2024-11-26T14:26:27", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 50 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.971879, 28.1921207, 758.0] }, "properties": { "start": "2024-11-25T13:26:35.681+05:45", "end": "2024-11-26T20:48:14.093+05:45", "Form Number": "51", "Healthcare Facility Name": "Chaya Chhetra Healthcare", "Address": "Birauta Chowk", "Contact No.": "061-591880", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "21:00:00.000+05:45", "Type of Healthcare Facility": "Clinic Pharmacy", "Type of Treatment": "Medicine only Primary Secondary", "Emergency Services": "Yes", "Wheelchair availability": "No", "No. of Beds": "6", "No. of Staff": "10", "Staff Education": "B.pharma and CMA, Radiography", "Full Capacity (approx)": "10", "Daily average traffic": "100", "Photo": "1732520962006.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Fc59b4aed-1483-472d-8b47-43564204bd5b%2F1732520962006.jpg", "_id": 413181029, "_uuid": "73965390-a812-4b07-b809-458f1744a3c6", "_submission_time": "2024-11-26T14:26:40", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 51 } }
        ]
    },
    {
        "type": "FeatureCollection",
        "name": "GPS_SURVEY_GROUP_E",
        "features": [
            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [83.9745273, 28.196548, 762.0] }, "properties": { "start": "2024-11-25T11:37:55.260+05:45", "end": "2024-11-26T20:49:06.806+05:45", "Form Number": "52", "Healthcare Facility Name": "Gastrocare and Multispeciality Polyclinic Pvt.Ltd", "Address": "Mustang Chowk", "Contact No.": "061-585560", "Ownership": "Private", "Opening Hour": "07:00:00.000+05:45", "Closing hour": "19:00:00.000+05:45", "Type of Healthcare Facility": "Clinic", "Type of Treatment": "Medicine only Primary Secondary", "Emergency Services": "No", "Wheelchair availability": "Yes", "If yes, how many?": "1", "No. of Beds": "7", "No. of Staff": "12", "Staff Education": "Bsc Nursing, Lab technicians", "Full Capacity (approx)": "40", "Daily average traffic": "40", "Photo": "1732514525806.jpg", "Photo_URL": "https://kc.kobotoolbox.org/media/original?media_file=lijamagar%2Fattachments%2F7dca5c2315044268a0872a600b5dd82d%2Ffbffe574-f26f-4d7e-b77e-d26ef5963047%2F1732514525806.jpg", "_id": 413181436, "_uuid": "4baa8ade-8e5a-4448-9400-4133c08239e4", "_submission_time": "2024-11-26T14:27:28", "_status": "submitted_via_web", "_submitted_by": "lijamagar", "__version__": "vtKh2Uf6azKxxB8Qy8d8tb", "_index": 52 } }
        ]
    }
];
// Marker Colors for Facility Types
const markerColors = {
    'Hospital': 'red',
    'Clinic': 'blue',
    'Pharmacy': 'green'
};

// Adding Markers to Map
let geojsonLayer = L.geoJSON(geoData, {
    pointToLayer: function (feature, latlng) {
        const facilityType = feature.properties["Type of Healthcare Facility"];
        const treatmentType = feature.properties["Type of Treatment"];

        return L.circleMarker(latlng, {
            radius: 8,
            color: markerColors[facilityType] || 'gray',  // Default to gray if not defined
            fillColor: markerColors[treatmentType.split(' ')[0]] || 'gray', // Primary, Secondary, Tertiary (only taking the first treatment)
            fillOpacity: 0.8
        });
    },
  // Modify the onEachFeature function to display text and image in two columns
onEachFeature: function (feature, layer) {
    const props = feature.properties;
    
    // Popup HTML structure
    const popupContent = `
        <div style="display: flex; align-items: center;">
            <!-- Left side for Text Information -->
            <div style="flex: 1; padding-right: 10px;">
                <b>${props["Healthcare Facility Name"]}</b><br>
                <b>Address:</b> ${props.Address}<br>
                <b>Contact No.:</b> ${props["Contact No."]}<br>
                <b>Facility Type:</b> ${props["Type of Healthcare Facility"]}<br>
                <b>Treatment Type:</b> ${props["Type of Treatment"]}<br>
                <b>Emergency Services:</b> ${props["Emergency Services"]}<br>
                <b>Wheelchair Availability:</b> ${props["Wheelchair availability"]}<br>
                <b>No. of Beds:</b> ${props["No. of Beds"]}<br>
                <b>No. of Staff:</b> ${props["No. of Staff"]}<br>
                <b>Staff Education:</b> ${props["Staff Education"]}
            </div>
            
            <!-- Right side for Image -->
            <div style="flex-shrink: 0; width: 120px; height: auto;">
                <img src="Image/${props.Photo}" alt="Facility Image" style="width: 100%; height: auto; border-radius: 5px;">
            </div>
        </div>
    `;
    
    // Bind the popup to the layer
    layer.bindPopup(popupContent);
}
    
}).addTo(map);
// Search input event listener
document.getElementById('search-input').addEventListener('input', function(e) {
    const query = e.target.value;
    searchFeature(query);  // Call the search function with the current input value
});
        
// Function to search and fetch results from the API
async function searchFacilities() {
    const query = document.getElementById('search-input').value;  // Grab the search query from input field
    if (!query) {
        alert("Please enter a search term!");
        return;
    }

    try {
        // Make API call to search for healthcare facilities
        const response = await fetch(`http://127.0.0.1:5000 /api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();  // Parse the JSON response

        // Clear previous results
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No healthcare facilities found.</p>';
        } else {
            // Loop through each result and display it
            data.forEach(facility => {
                const facilityDiv = document.createElement('div');
                facilityDiv.classList.add('facility');
                facilityDiv.innerHTML = `
                    <h3>${facility["Healthcare Facility Name"]}</h3>
                    <p><strong>Address:</strong> ${facility.Address}</p>
                    <p><strong>Type:</strong> ${facility["Type of Healthcare Facility"]}</p>
                    <p><strong>Contact:</strong> ${facility["Contact No."]}</p>
                `;
                resultsContainer.appendChild(facilityDiv);

                // Add an event listener to zoom to the facility's location when clicked
                facilityDiv.addEventListener('click', function() {
                    const lat = facility.geometry.coordinates[1];
                    const lng = facility.geometry.coordinates[0];
                    const latlng = [lat, lng];

                    // Zoom to the facility on the map
                    map.setView(latlng, 15); // Zoom level can be adjusted as needed

                    // Find and open the popup of the corresponding marker
                    const marker = L.marker(latlng).addTo(map); // Add a marker at the location
                    marker.bindPopup(`
                        <b>${facility["Healthcare Facility Name"]}</b><br>
                        <b>Address:</b> ${facility.Address}<br>
                        <b>Contact No.:</b> ${facility["Contact No."]}<br>
                        <b>Facility Type:</b> ${facility["Type of Healthcare Facility"]}<br>
                        <b>Treatment Type:</b> ${facility["Type of Treatment"]}<br>
                        <b>Emergency Services:</b> ${facility["Emergency Services"]}<br>
                        <b>Wheelchair Availability:</b> ${facility["Wheelchair availability"]}<br>
                        <b>No. of Beds:</b> ${facility["No. of Beds"]}<br>
                        <b>No. of Staff:</b> ${facility["No. of Staff"]}<br>
                        <b>Staff Education:</b> ${facility["Staff Education"]}<br>
                        <img src="${facility["Photo_URL"]}" style="width:100px; height:auto;">
                    `).openPopup();
                });
            });
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        alert("An error occurred while fetching data.");
    }
}