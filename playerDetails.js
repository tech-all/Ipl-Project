$(function () {

    const teams = [
        {
            id: "0",
            classlogo: "Chennai Super Kingslogo",
            teamname: "Chennai Super Kings",
            classtext: "Chennai Super Kingstext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368389.cms",
            teamlogo: "https://www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png"

        },
        {
            id: "1",
            teamname: "Delhi Capitals",
            classlogo: "delhilogo",
            classtext: "delhitext",
            teamurl: "https://timesofindia.indiatimes.com/photo/68405443.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"

        },
        {
            id: "2",
            teamname: "Kolkata Knight Riders",
            classlogo: "kolkatalogo",
            classtext: "kolkatatext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368434.cms",
            teamlogo: "https://i.pinimg.com/originals/24/ac/85/24ac856684a5edacdbe58914839c8215.png"

        },
        {
            id: "3",
            teamname: "Punjab kings",
            classlogo: "punjablogo",
            classtext: "punjabtext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368442.cms",
            teamlogo: "https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg"

        },
        {
            id: "4",
            teamname: "Mumbai Indians",
            classlogo: "mumbailogo",
            classtext: "mumbaitext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368446.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"

        },
        {
            id: "5",
            teamname: "Sunrisers Hyderabad",
            classlogo: "sunriserslogo",
            classtext: "sunriserstext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368457.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"

        },
        {
            id: "6",
            teamname: "Rajhastan Royals",
            classlogo: "rajhastanlogo",
            classtext: "rajhastantext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368466.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png"

        },
        {
            id: "7",
            teamname: "royal challegers bengulur",
            classlogo: "bengulurlogo",
            classtext: "bengulurtext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368476.cms",
            teamlogo: "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg"

        }
    ]

    const teamdetails = [

        {
            id: "0",
            classname: "cskclass",
            teamname: 'Chennai Super Kings',
            teamicon: "https://www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png",
            players: [{
                playername: "Ravindra Jadeja",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3850.png",
                team: "Chennai Super Kings",
                price: "16Cr",
                isplaying: "Playing",
                description: "All-Rounder"
            },
            {
                playername: "Ms Dhoni",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3676.png",
                team: "Chennai Super Kings",
                price: "12Cr",
                isplaying: "Playing",
                description: "Batsman/Wicket-keeper"
            },
            {
                playername: "Moeen Ali",
                team: "Chennai Super Kings",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4688.png",
                price: "8Cr",
                isplaying: "Playing",
                description: "All-Rounder"
            },
            {
                playername: "Ruturaj Gaikwad",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66584.png",
                team: "Chennai Super Kings",
                price: "6Cr",
                isplaying: "Playing",
                description: "Batsman"
            },
            {
                playername: "Dwayne Bravo",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3556.png",
                team: "Chennai Super Kings",
                price: "4.4 Cr",
                isplaying: "Playing",
                description: "Bowler"
            },
            {
                playername: "Ambati Rayadu",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4176.png",
                team: "Chennai Super Kings",
                price: "6.75 Cr",
                isplaying: "Playing",
                description: "Batsman/Wicket-keeper"
            },
            {
                playername: "KM Asif",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67709.png",
                team: "Chennai Super Kings",
                price: "20 lakh",
                isplaying: "Playing",
                description: "Bowler"
            },
            {
                playername: "Tushar Deshpande",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                team: "Chennai Super Kings",
                price: "20 lakh",
                isplaying: "Playing",
                description: "Bowler"
            },
            {
                playername: "Mitchell Santar",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/57903.png",
                team: "Chennai Super Kings",
                price: "14 Cr",
                isplaying: "Playing",
                description: "Bowler"
            },
            {
                playername: "Shivam Dube",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66044.png",
                team: "Chennai Super Kings",
                price: "4 Cr",
                isplaying: "Playing",
                description: "All-Rounder"
            },
            {
                playername: "Maheesh Theeksna",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                team: "Chennai Super Kings",
                price: "70 lakh",
                isplaying: "Playing",
                description: "Bowler"
            },
            {
                playername: "Devan Conway",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                team: "Chennai Super Kings",
                price: "1 Cr",
                isplaying: "Bench",
                description: "Batsman"
            },
            {
                playername: "Chris Jordan",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/26718.png",
                team: "Chennai Super Kings",
                price: "2 Cr",
                isplaying: "Bench",
                description: "Bowler"
            }],
        },


        {
            id: "1",
            classname: "delhiclass",
            teamname: 'Delhi Capitals',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png",
            players: [
                {
                    playername: "Rishabh Pant",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65756.png",
                    team: "Delhi Capitals",
                    price: "16Cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"

                },
                {
                    playername: "Axar Patel",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/62576.png",
                    team: "Delhi Capitals",
                    price: "9Cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Prithvi Shaw",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66812.png",
                    team: "Delhi Capitals",
                    price: "7.5Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Anrich Nortje",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63641.png",
                    team: "Delhi Capitals",
                    price: "6.5Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "David Warner",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5380.png",
                    team: "Delhi Capitals",
                    price: "6.25Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Mitchell Marsh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10094.png",
                    team: "Delhi Capitals",
                    price: "6.5Cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Ashwin Hebbar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Delhi Capitals",
                    price: "20lakh",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Shardul Thakur",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63345.png",
                    team: "Delhi Capitals",
                    price: "10.75Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Kamlesh Nagarkoti",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66807.png",
                    team: "Delhi Capitals",
                    price: "1.1Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Mustafizur Rehman",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63881.png",
                    team: "Delhi Capitals",
                    price: "2.0cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Kuldeep Yadav",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63187.png",
                    team: "Delhi Capitals",
                    price: "2Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Mandeep Singh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10114.png",
                    team: "Delhi Capitals",
                    price: "1.1Cr",
                    isplaying: "Bench",
                    description: "All-Rounder"
                }],
        },


        {
            id: "2",
            classname: "kolkataclass",
            teamname: 'Kolkata Knight Riders',
            teamicon: "https://i.pinimg.com/originals/24/ac/85/24ac856684a5edacdbe58914839c8215.png",
            players: [
                {
                    playername: "Shreyas Iyer",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63961.png",
                    team: "Kolkata Knight Riders",
                    price: "12.25Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Ajinke Rahane",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3991.png",
                    team: "Kolkata Knight Riders",
                    price: "1Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Pat Cummins",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/56964.png",
                    team: "Kolkata Knight Riders",
                    price: "7.25cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Nitish Rana",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63649.png",
                    team: "Kolkata Knight Riders",
                    price: "8Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Sheldon Jackson",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/37338.png",
                    team: "Kolkata Knight Riders",
                    price: "60lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Shubman Gill",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Kolkata Knight Riders",
                    price: "95lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Andre Russell",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/12047.png",
                    team: "Kolkata Knight Riders",
                    price: "12Cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Ankul Roy",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66983.png",
                    team: "Kolkata Knight Riders",
                    price: "20lacs",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Sunil Narine",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/11229.png",
                    team: "Kolkata Knight Riders",
                    price: "6cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Tim Southee",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4235.png",
                    team: "Kolkata Knight Riders",
                    price: "1.5cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Varun Chakravarthy",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67469.png",
                    team: "Kolkata Knight Riders",
                    price: "8cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Shivam Mavi",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66984.png",
                    team: "Kolkata Knight Riders",
                    price: "7.25Cr",
                    isplaying: "Bench",
                    description: "All-Rounder"
                }],

        },

        {
            id: "3",
            classname: "punjabclass",
            teamname: 'Punjab kings',
            teamicon: "https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg",
            players: [

                {
                    playername: "Shikar Dhawan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3722.png",
                    team: "Punjab kings",
                    price: "8.25Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Johny Bairstow",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/19394.png",
                    team: "Punjab kings",
                    price: "6.75Cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Hrpeet Brar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Punjab kings",
                    price: "3.1cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Mayank Agarwal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10115.png",
                    team: "Punjab kings",
                    price: "12Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Sharukh Khan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Punjab kings",
                    price: "9Cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Rahul Chahar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66823.png",
                    team: "Punjab kings",
                    price: "5.5Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Vaibhav Arora",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Punjab kings",
                    price: "2Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Nathan Ellis",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Punjab kings",
                    price: "75lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Athrava Taide",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67910.png",
                    team: "Punjab kings",
                    price: "20lacs",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Liam Livingstone",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63940.png",
                    team: "Punjab kings",
                    price: "11.5Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "PrabhSimran Singh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/70222.png",
                    team: "Punjab kings",
                    price: "60lcs",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Sandeep Sharma",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10116.png",
                    team: "Punjab kings",
                    price: "1.9cr",
                    isplaying: "Bench",
                    description: "Bowler"
                }],

        },
        {
            id: "4",
            classname: "mumbaiclass",
            teamname: 'Mumbai Indians',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
            players: [
                {
                    playername: "Ishan Kishan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64712.png",
                    team: "Mumbai Indians",
                    price: "15.25cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Dewaid Brewis",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Mumbai Indians",
                    price: "3Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Rohit Sharma",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3852.png",
                    team: "Mumbai Indians",
                    price: "16Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Mayank Markande",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67126.png",
                    team: "Mumbai Indians",
                    price: "65lacs",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Suryakumar Yadav",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/11803.png",
                    team: "Mumbai Indians",
                    price: "8cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Tim David",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Mumbai Indians",
                    price: "8.25Cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Jofra Archer",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64254.png",
                    team: "Mumbai Indians",
                    price: "10.0cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },

                {
                    playername: "Arjun Tendulkar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Mumbai Indians",
                    isplaying: "30lacs",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Fabian Allen",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Mumbai Indians",
                    isplaying: "1.72cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Kieron Pollard",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3910.png",
                    team: "Mumbai Indians",
                    price: "5.9cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Rahul Buddhi",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Mumbai Indians",
                    price: "90lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Anmolpreet Singh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65438.png",
                    team: "Mumbai Indians",
                    price: "2.1cr",
                    isplaying: "Bench",
                    description: "Batsman"
                },
                {
                    playername: "Jasprit Bumrah",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63755.png",
                    team: "Mumbai Indians",
                    price: "8.0cr",
                    isplaying: "Bench",
                    description: "Bowler"
                }],



        },
        {
            id: "5",
            classname: "sunrisersclass",
            teamname: 'Sunrisers Hyderabad',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
            players: [

                {
                    playername: "Abdul Samad",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "sunrisershyderabad",
                    price: "90lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Umran Malik",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "sunrisershyderabad",
                    price: "1.0cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Kane Williamson",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4330.png",
                    team: "sunrisershyderabad",
                    price: "14cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },

                {
                    playername: "Washington Sundar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65859.png",
                    team: "sunrisershyderabad",
                    price: "13cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },

                {
                    playername: "Nicholas Pooran",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63726.png",
                    team: "sunrisershyderabad",
                    price: "12.1cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },

                {
                    playername: "Priyam Garg",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66803.png",
                    team: "sunrisershyderabad",
                    price: "20.5lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },

                {
                    playername: "Rahul Tripathi",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/41229.png",
                    team: "sunrisershyderabad",
                    price: "8.1cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },

                {
                    playername: "Abhishek Sharma",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66799.png",
                    team: "sunrisershyderabad",
                    price: "9.8cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },

                {
                    playername: "Bhuvneshwar Kumar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5132.png",
                    team: "sunrisershyderabad",
                    price: "4.3cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },

                {
                    playername: "Shreyas Gopal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/58155.png",
                    team: "sunrisershyderabad",
                    price: "2.1cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },


                {
                    playername: "T Natarajan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65160.png",
                    team: "sunrisershyderabad",
                    price: "4.0cr",
                    isplaying: "Playing",
                    description: "Bowler"
                }],
        },


        {
            id: "6",
            classname: "rajasthanclass",
            teamname: 'Rajhastan Royals',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",
            players: [
                {
                    playername: "Yashasvi Jaiswal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rajhastan Royals",
                    price: "4.2cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "R. Ashwin",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4555.png",
                    team: "Rajhastan Royals",
                    price: "5Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Trent Boult",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4338.png",
                    team: "Rajhastan Royals",
                    price: "5.1cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Shimron Hetmyer",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64861.png",
                    team: "Rajhastan Royals",
                    price: "8.2cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Devdutt Padikkal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67589.png",
                    team: "Rajhastan Royals",
                    price: "7.75cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Rahul Tewatia",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rajhastan Royals",
                    price: "1.2lacs",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Riyan Parag",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67589.png",
                    team: "Rajhastan Royals",
                    price: "5Cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Shreyas Gopal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rajhastan Royals",
                    price: "1.3cr",
                    isplaying: "Playing",
                    description: "All-Rounder"
                },
                {
                    playername: "Joseph Buttler",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/9782.png",
                    team: "Rajhastan Royals",
                    price: "10.5cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Chetan Sakariya",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rajhastan Royals",
                    price: "1.1cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Sanju Samson",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/61837.png",
                    team: "Rajhastan Royals",
                    price: "12.1cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Konganda Cariappa",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65367.png",
                    team: "Rajhastan Royals",
                    price: "30lacs",
                    isplaying: "Bench",
                    description: "Bowler"
                },
                {
                    playername: "Yuzvendra Chahal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/9844.png",
                    team: "Rajhastan Royals",
                    price: "5.9cr",
                    isplaying: "Bench",
                    description: "Bowler"
                },
                {
                    playername: "Karun Nair	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/62297.png",
                    team: "Rajhastan Royals",
                    price: "2cr",
                    isplaying: "Playing",
                    description: "Bowler"
                }],

        },

        {
            id: "7",
            classname: "royalclass",
            teamname: ' Royal Challengers Banglore',
            teamicon: "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg",
            players: [
                {
                    playername: "Faf Du Plessis	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/28891.png",
                    team: "Royal Challengers Banglore",
                    price: "12cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Wanindu Hasaranga",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65027.png",
                    team: "Royal Challengers Banglore",
                    price: "10.1cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Dinesh Karthik	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3632.png",
                    team: "Royal Challengers Banglore",
                    price: "12.1cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Virat Kohli",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3993.png",
                    team: "Royal Challengers Banglore",
                    price: "15.2cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Anuj Rawat	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Royal Challengers Banglore",
                    price: "3.4cr",
                    isplaying: "Playing",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Josh Hazlewood",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4255.png",
                    team: "Royal Challengers Banglore",
                    price: "8.2cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Glenn Maxwell",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10085.png",
                    team: "Royal Challengers Banglore",
                    price: "11Cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Mohammad Siraj	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65799.png",
                    team: "Royal Challengers Banglore",
                    price: "7.0cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "David Wiley",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/35128.png",
                    team: "Royal Challengers Banglore",
                    price: "2Cr",
                    isplaying: "Playing",
                    description: "Bowler"
                },
                {
                    playername: "Sherfane Rutherford",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67285.png",
                    team: "Royal Challengers Banglore",
                    price: "92lacs",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Aneeshwar Gautam",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Royal Challengers Banglore",
                    price: "1.2cr",
                    isplaying: "Playing",
                    description: "Batsman"
                },
                {
                    playername: "Siddharth Kaul",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/61693.png",
                    team: "Royal Challengers Banglore",
                    price: "2cr",
                    isplaying: "Bench",
                    description: "Batsman"
                },
                {
                    playername: "Harshal Patel",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5407.png",
                    team: "Royal Challengers Banglore",
                    price: "12.1cr",
                    isplaying: "Bench",
                    description: "Bowler"
                },
                {
                    playername: "Mohammed Azharuddeen",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Royal Challengers Banglore",
                    price: "1.8cr",
                    isplaying: "Bench",
                    description: "All-Rounder"
                }],
        }]

        var getval = localStorage.getItem('playername')
        var value = getval.toUpperCase();
      
        var result
        for (var i = 0; i < teamdetails.length; i++) {
          for (var j = 0; j < teamdetails[i].players.length; j++) {
            if ((teamdetails[i].players[j].playername).toUpperCase() == (value)) {
              result = teamdetails[i].players[j]
      
              renderplayer(result)
      
            }
      
          }
        }
      
        function renderplayer(result) {
          var player = $("<div>").addClass('playerdetails')
          var playerimage = $("<div>").addClass('playerimage')
          player.append(playerimage)
          var playerimg = $("<img>").addClass('playerimg').attr("src", result.image)
          playerimage.append(playerimg)
          var details = $("<div>").addClass('details')
          player.append(details)
          var namedet = $("<h1>").addClass('namedet').text('Full Name - ')
          var spannamedet = $("<span>").text(result.playername)
          namedet.append(spannamedet)
          details.append(namedet)
          var namedet1 = $("<h1>").addClass('namedet val').text('Team Name - ')
          var spannamedet1 = $("<span>").text(result.team)
          namedet1.append(spannamedet1)
          details.append(namedet1)
          var namedet2 = $("<h1>").addClass("namedet val").text('Price - ')
          var spannamedet2 = $("<span>").text(result.price)
          namedet2.append(spannamedet2)
          details.append(namedet2)
          var playingStatus = $("<h1>").addClass("namedet val").text('Playing Status - ')
          var spanPlayingStatus = $("<span>").text(result.isplaying)
          playingStatus.append(spanPlayingStatus)
          details.append(playingStatus);
          var playerArea = $("<h1>").addClass("namedet val").text('Description - ')
          var spanplayerArea = $("<span>").text(result.description)
          playerArea.append(spanplayerArea)
          details.append(playerArea);
          $(".mainPartSection").append(player)
        }
      
      })
