
// Sourced from: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function iterateRecords(data) {

    console.log(data);

       var count = 0;
    shuffle(data.result.records);
    var answers1 = localStorage.answers1;
    var answers2 = localStorage.answers2;
    console.log(answers1,answers2)

    $.each(data.result.records, function(recordKey, recordValue) {

        var recordTitle = recordValue["Title of image"];
        var fullName = recordValue["Full name (from National Archives of Australia"];
        var recordImage = recordValue["High resolution image"];
        var militaryDetails = recordValue["Military Details"];
        var MGS = "The Australian Machine Gun Corps was a corps of the Australian Army which was formed for service during World War I. It was established in early 1916 as part of a reorganisation of the Australian Imperial Force (AIF) in Egypt as preparations were made to transfer the bulk of the AIF's infantry divisions to Europe to take part in the fighting on the Western Front. Initially, the corps was established into company or squadron sized elements, with a total of 20 companies being raised for service in Europe and four squadrons for service with the Australian Light Horse in the Middle East. In early 1918, the companies deployed to the Western Front were reorganised into five battalions, which were each assigned to an infantry division for defensive and offensive duties. These units were disbanded in mid-1919 following the end of hostilities."

        var infantry9th = "The 9th Battalion was among the first infantry units raised for the AIF during the First World War. It was the first battalion recruited in Queensland, and with the 10th, 11th and 12th Battalions it formed the 3rd Brigade.The battalion was raised within weeks of the declaration of war in August 1914 and embarked just two months later. After preliminary training, the battalion sailed to Egypt, arriving in early December. The 3rd Brigade was the covering force for the ANZAC landing on 25 April 1915, and so was the first ashore at around 4.30 am. The battalion was heavily involved in establishing and defending the front line of the ANZAC beachhead. It served at ANZAC until the evacuation in December 1915."

        var lightHorse = "The 2nd Light Horse Regiment was raised at Enoggera in Queensland on 18 August 1914. Its recruits came mainly from Queensland but some hailed from the northern rivers district of New South Wales. The 2nd was one of three regiments of the 1st Light Horse Brigade - the first Australian mounted formation raised by Australia during the First World War. The regiment sailed from Brisbane on 25 September and disembarked in Egypt on 9 December. The 2nd Light Horse Regiment deployed to Gallipoli without its horses and landed there on 12 May 1915, joining the New Zealand and Australian Division. It played a defensive role for most of the campaign but did attack the Turkish trenches opposite Quinn's Post, one of the most contested positions along the ANZAC Line. The first assault wave was mown down and fortunately the officer commanding the attack had the wisdom and courage to call it off. The 2nd was withdrawn from the front line in September and left the peninsula on 18 December."

        var infantry15th = "The 15th Battalion AIF was raised from late September 1914, six weeks after the outbreak of the First World War. Three-quarters of the battalion were recruited as volunteers from Queensland, and the rest from Tasmania. With the 13th, 14th and 16th Battalions it formed the 4th Brigade, commanded by Colonel John Monash. The Queensland and Tasmanian recruits were united when the battalion trained together in Victoria. They embarked for overseas just before Christmas. After a brief stop in Albany, Western Australia, the battalion proceeded to Egypt, arriving in early February 1915. Australia already had an AIF division there, the 1st. When the 4th Brigade arrived in Egypt, it became part of the New Zealand and Australian Division. The 4th Brigade landed at ANZAC late in the afternoon of 25 April 1915."

        var fieldArtillery ="The Field Artillery Brigade was raised on 23 September 1915, following the formation of the First Australian Imperial Force (AIF) and the raising of the 2nd Division in Egypt in 1915. It comprised of recruits from the pre-war militia's 7th Field Artillery Brigade, based at St Kilda, Vic., and the 8th Field Artillery Brigade. The brigade went into camp at Albert Park, Melbourne, where it did its initial training. It consisted of three artillery batteries: 10, 11, and 12 Batteries. In November the brigade embarked for overseas service and sail to Egypt, where it joined the 2nd Division and the older AIF units following the Gallipoli campaign. A fourth battery, 19 Battery, was formed from the brigade's ammunition column. In March 1916 the brigade embarked at Alexandria for France, as the AIF moved to the Western Front."

        var bandMember = "Bandsmen were trained soldiers expected to support their battalions in battle. Regulations prescribed that 25 bandsmen could remain behind the lines but they had to be prepared to move to the Transport Lines and assist as carriers during emergencies. Sergeant Thompson and his stretcher-bearers of the 9th Battalion were among many bandsmen who became stretcher-bearers when their units were mobilised. Others carried food up to the trenches on the Somme or took part in combat. Establishing battalion bands required a supply of sheet music, instruments and trained musicians. Instruments were donated by wealthy individuals or acquired with the assistance of organisations like the Victoria Racing Club, Queensland Patriotic Club and the West Australian Trench Comforts Fund. Enterprising units organised their own concerts to raise the money, while other bands drew upon personal supplies of sheet music and instruments brought from home."

// horse 0
            if (answers1 == 0 && recordImage && militaryDetails == '2nd Light Horse Regiment') {
                count++;
                $("#records").append(
                    $('<section class="record">').append(
                        $('<img>').attr("src", recordImage)
                    )
                );

                $("#records").append(
                    $('<p class="desc">').append("This Soldier was part of The Light Horse Regiment. " + lightHorse)
                );
				var marker = L.marker([-24.9, 152.3]).addTo(mymap);
				marker.bindPopup("<b>This is your ideal location to live in.").openPopup();
            }

// Field Artillery 1
            if (answers1 == 1&& recordImage && militaryDetails == 'Field Artillery') {
                count++;
                $("#records").append(
                    $('<section class="record">').append(
                        $('<img>').attr("src", recordImage)
                    )
                );
                $("#records").append(
                    $('<p class="desc">').append("This Soldier was part of The Field Artillery Brigade. " + fieldArtillery)
                );
				var marker = L.marker([-27, 153]).addTo(mymap);
				marker.bindPopup("<b>This is your ideal location to live in.").openPopup();
            }

// machine gun section 2
var $newdiv1 = $("<p>" + MGS + "</p>");
            if (answers1 == 2 && recordImage && militaryDetails == 'Machine Gun Section, Miners Corps and Signallers') {
                count++;
                $("#records").append(
                    $('<section class="record">').append(
                        $('<img>').attr("src", recordImage)
                    )
                );

                $("#records").append(
                    $('<p class="desc">').append("This Soldier was part of the Machine Gun Corps. " + MGS)
                );
                console.log(recorddesc)
                
				var marker = L.marker([-16.9, 145.73]).addTo(mymap);
				marker.bindPopup("<b>This is your ideal location to live in.").openPopup();
            }
// infantry 3
            if (answers1 == 3 && recordImage && militaryDetails == '9th Infantry Battalion') {
                count++;
                $("#records").append(
                    $('<section class="record">').append(
                        $('<img>').attr("src", recordImage)
                    )
                );

                $("#records").append(
                    $('<p class="desc">').append("This Soldier was part of the The 9th Infantry Battalion . " + infantry9th)
                );
				var marker = L.marker([-20.8, 139.4]).addTo(mymap);
				marker.bindPopup("<b>This is your ideal location to live in.").openPopup();
            }



// band member 4
            if (answers1 == 4 && recordImage && militaryDetails == 'Band member') {
                count++;
                $("#records").append(
                    $('<section class="record">').append(
                        $('<img>').attr("src", recordImage)
                    )
                );

                $("#records").append(
                    $('<p class="desc">').append("This Soldier was part of the Bandsmen. " + bandMember)
                );

				var marker = L.marker([-19.3, 146.8]).addTo(mymap);
				marker.bindPopup("<b>This is your ideal location to live in.").openPopup();
            }
// infantry 5
            if (answers1 == 5 && recordImage && militaryDetails == '15th Infantry Battalion') {
                count++;
                $("#records").append(
                    $('<section class="record">').append(
                        $('<img>').attr("src", recordImage)
                    )
                );

                $("#records").append(
                    $('<p class="desc">').append("This Soldier was part of the 15th Infantry battalion. " + infantry15th)
                );
                var marker = L.marker([-19.3, 146.8]).addTo(mymap);
                marker.bindPopup("<b>This is your ideal location to live in.").openPopup();
            }

        if (count == 1) {
            return false;
        }
    });

}

var mymap = L.map('mapid').setView([-22, 145], 5);

$(document).ready(function() {

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoieGRhcmtlY2xpcHNlIiwiYSI6ImNqbmxlMmRvczA1azMzdmp4aHMwMjA2amgifQ.C8T6GAAS549UkEpn6sN_rA'
	}).addTo(mymap);

    $.ajax({
        url: "https://data.gov.au/api/3/action/datastore_search_sql?sql=SELECT%20%22Full%20name%20(from%20National%20Archives%20of%20Australia)%22,%20%22Military%20Details%22,%20%22High%20resolution%20image%22%20from%20%22cf6e12d8-bd8d-4232-9843-7fa3195cee1c%22%20WHERE%20%22Military%20Details%22%20IS%20NOT%20NULL",
        dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
        cache: true,
        success: function(data) {
            iterateRecords(data);
        }
    });
    //https://data.gov.au/api/3/action/datastore_search_sql?sql=SELECT "Full name (from National Archives of Australia)", "Military Details", "High resolution image" from "cf6e12d8-bd8d-4232-9843-7fa3195cee1c" WHERE "Military Details" IS NOT NULL

});