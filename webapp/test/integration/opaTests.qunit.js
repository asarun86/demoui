sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'deal/demo/test/integration/FirstJourney',
		'deal/demo/test/integration/pages/DealHeaderMain'
    ],
    function(JourneyRunner, opaJourney, DealHeaderMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('deal/demo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDealHeaderMain: DealHeaderMain
                }
            },
            opaJourney.run
        );
    }
);