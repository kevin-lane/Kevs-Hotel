var hotels = [
    {hotelName: 'Scandic Crown', location: 'Gothenburg', description: 'The best hotel in Gothenburg. Its gör best', price: 800},
    {hotelName: 'Scandic Alvik', location: 'Stockholm', description: 'Stockholms finest hotel', price: 1200},
    {hotelName: 'Scandic Triangeln', location: 'Malmö', description: 'One of the finest in Malmö, and with an amazing view of Malmö.', price: 1000},
    {hotelName: 'City Hotel Avenyn', location: 'Gothenburg', description: 'Great and cosy hotel in middle of Gothenburg', price: 750},
    {hotelName: 'Ice Hotel', location: 'Kiruna', description: 'The hotel that exists in the winter and looks like an igloo', price: 1250},
    {hotelName: 'Gålö Camping', location: 'Haninge', description: 'A great excursion in Stockholm', price: 995},
    {hotelName: 'Four Seasons Gävle', location: 'Gävle', description: 'Awesome hotel for all seasons in Gävle', price: 899}
];

var hotelListItem = document.getElementById('hotelCard');
var selectedHotelModal = document.getElementById("hotelModal"); //Get Modal

var searchInput = document.getElementById("locationSearch");
var checkInTime = document.getElementsByClassName("checkInTime");

function searchBarFeatures(){
    console.log(searchInput.value);
    //console.log("Check in: " + checkInTime.value.toString());
    var locOccurence = hotels.filter((hot) => hot.location.toUpperCase() === searchInput.value.toUpperCase());

    console.log("There are " + locOccurence.length + " hotels in " + searchInput.value);

            console.log("The Location search input seems to match the hotel Location ;) ");
            $(document).ready(function(){
                var hotelList = $("#hotelList");
                    hotelList.find('li').hide();
                    hotelList.find('.hotelLocation').filter(function() { 
                        return $(this).text().toUpperCase().indexOf(searchInput.value.toUpperCase()) == 0;
                    }).parent().show();

                $("#searchCount").html("There are " + locOccurence.length + " hotels in " + searchInput.value);
            });

    if(searchInput.value.toUpperCase() === ""){
        document.getElementById("searchCount").style.display = 'none';
    }
    else{
        document.getElementById("searchCount").style.display = 'block';

    }
}

function hotelList() {
    console.log(hotels.length);
    console.log(searchInput.value);

    for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];

        const hotelCard = ('<li id="hotelCard"><h3 class="hotelName">'
                            + hotel.hotelName + '</h3>' + 
                            '<p class="hotelLocation">' + hotel.location + 
                            '</p><dfn class="hotelDescription">'+ hotel.description +
                            ' <br></dfn><b class="priceOfStay">'+ hotel.price +'</b><br>' + 
                            '<button onclick="openSelectedHotelModal()" class="selectHotelBtn">Select this hotel</button></li>');

        $(document).ready(function(){
            var hotelList = $("#hotelList");
            hotelList.append(hotelCard);
        });
    }
}

function openSelectedHotelModal() {

    for (let i = 0; i < hotels.length; i++) {}
    const modelCard = ('<div id="modal-content">' +
                       '<span class="closeModalBtn" onclick="closeSelectedModal()">&#8864; </span>' +
                       '<h3 class="selectedHotelName"><b></b></h3>' +
                       '<p class="selectedHotelLocation"></p>' +
                       '<dfn class="selectedHotelDescription">The best hotel in Gothenburg. Its gör best</dfn>' +
                       '<b class="selectedPriceOfStay">800 SEK</b><br>' +
                       '</div>');

    $(document).ready(function(){
        $("#hotelModal").append(modelCard);
    })                
    var hotelName = document.getElementsByClassName('hotelName');
    selectedHotelModal.style.display = 'block';
    console.log('Modal opened?!');
    console.log(hotelName);  


}

function closeSelectedModal() {
    selectedHotelModal.style.display = 'none';
}

window.onload = hotelList;