var chart = new Highcharts.chart('container', {

    title: {
        text: 'Genres dependencies',
        style: {'display':'none'}  
    },
    chart: {
        backgroundColor: 'transparent'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
        }
    },

    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
        ['pop', 'post-teen pop', 160],
        ['pop', 'dance pop', 111],
        ['reggaeton', 'latin', 92],
        ['dance pop', 'post-teen pop', 71],
        ['trap latino', 'reggaeton', 67],
        ['trap latino', 'latin', 63],
        ['pop', 'canadian pop', 55],
        ['rap', 'hip hop', 50],
        ['rap', 'trap', 33],
        ['canadian pop', 'post-teen pop', 32],
        ['k-pop', 'k-pop boy group', 30],
        ['reggaeton', 'reggaeton colombiano', 29],
        ['latin', 'reggaeton colombiano', 29],
        ['pop', 'uk pop', 25],
        ['melodic rap', 'rap', 23]
        ],
        type: 'dependencywheel',
        name: 'Dependency wheel series',
        dataLabels: {
            color: 'white',
            style: {
                fontSize: '10px'
            },
            textPath: {
                enabled: true,
                attributes: {
                    dy: 4
                }
            },
            distance: 10,
            overflow: "allow",
            crop: false
        },
        tooltip: {
            nodeFormatter: function() {
                if (this.id === 'pop') {
                    return 'Pop'.bold() + '<br> Pop is music specifically designed for mass appeal and commercial success. It can have almost any kind of instrumentation and musical characteristics. The main thing is that it be catchy, upbeat, and – well – popular. '
                } else if (this.id == 'post-teen pop') {
                    return 'Post-teen pop'.bold() + '<br> blabla'
                } else if (this.id == 'dance pop') {
                    return 'Dance pop'.bold() + '<br> blabla'
                } else if (this.id == 'reggaeton') {
                    return 'Reggaeton'.bold() + '<br> blabla'
                } else if (this.id == 'latin') {
                    return 'Latin'.bold() + '<br> blabla'
                } else if (this.id == 'trap latino') {
                    return 'Trap latino'.bold() + '<br> blabla'
                } else if (this.id == 'canadian pop') {
                    return 'Canadian pop'.bold() + '<br> blabla'
                } else if (this.id == 'rap') {
                    return 'Rap'.bold() + '<br> blabla'
                } else if (this.id == 'hip hop') {
                    return 'Hip hop'.bold() + '<br> blabla'
                } else if (this.id == 'trap') {
                    return 'Trap'.bold() + '<br> blabla'
                } else if (this.id == 'k-pop') {
                    return 'K-pop'.bold() + '<br> blabla'
                } else if (this.id == 'k-pop boy group') {
                    return 'K-pop boy group'.bold() + '<br> blabla'
                } else if (this.id == 'reggaeton colombiano') {
                    return 'Reggaeton colombiano'.bold() + '<br> blabla'
                } else if (this.id == 'uk pop') {
                    return 'UK pop'.bold() + '<br> blabla'
                } else if (this.id == 'melodic rap') {
                    return 'Melodic rap'.bold() + '<br> blabla'
                } 
            },
            useHTML: true,
            valueDecimals: 2,
            style: {
                width: '100px'
            }
        },
        size: '95%'
    }]

},
function(chart){
    chart.container.lastChild.className = 'highcharts-tooltip';
    
});