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
        ['k-p', 'k-pop boy group', 30],
        ['reggaeton', 'colombia', 29],
        ['latin', 'colombia', 29],
        ['pop', 'uk', 25],
        ['rap ', 'rap', 23]
        ],
        type: 'dependencywheel',
        name: '',
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
                    return 'Pop'.bold() + '<br> Pop music appeared in the 50s in the United States. It is a simple abbreviation of <i>popular music</i> and has often been used to group anything commercial. Identifying factors usually include repeated choruses and hooks, the verse-chorus structure, and rhythms or tempos that can be easily danced to. '
                } else if (this.id == 'post-teen pop') {
                    return 'Post-teen pop'.bold() + '<br> Dance-pop is a subgenre of pop music that originated in the late 70s to early 80s. Combination of dance and pop with influences of disco. It is generally characterised by strong beats with easy, uncomplicated song structures which are generally more similar to pop music with an emphasis on melody as well as catchy tunes.'
                } else if (this.id == 'dance pop') {
                    return 'Dance pop'.bold() + '<br> Teen pop is a subgenre of pop music that is created, marketed, and oriented towards teenagers. It incorporates different subgenres of pop music, as well as elements of R&B, dance, electronic, hip-hop and rock. Typical characteristics of teen pop music include autotuned vocals, choreographed dancing, emphasis on visual appeal, lyrics focused on love, relationships, dancing, partying, friendship, and repeated chorus lines.'
                } else if (this.id == 'reggaeton') {
                    return 'Reggaeton'.bold() + '<br> Reggaeton is a form of dance music of Puerto Rican origin, characterized by a fusion of latin rhythms, dancehall, and hip-hop or rap. Vocals include rapping and singing, typically in Spanish.'
                } else if (this.id == 'latin') {
                    return 'Latin'.bold() + '<br> Latin music is a term used by the music industry as a catch-all arbitrary category for various styles of music from Latin America, Spain, Portugal, and the United States inspired by older Latin American, Spanish and Portuguese music genres, as well as music that is sung in the Spanish and/or Portuguese language.'
                } else if (this.id == 'trap latino') {
                    return 'Trap latino'.bold() + '<br> Latin trap is a subgenre of latin hip-hop, taking influence from Southern hip-hop as well as Puerto Rican genres like reggaeton and dembow. Vocals include a bend of rapping and singing using synthesizers and voice distorted autotune, often in Spanish, while still maintaining the trap style sonic circuitry. The lyrics in latin trap are often about street life, violence, sex, drugs, and people who live on the other side of the law and are proud of it.'
                } else if (this.id == 'canadian pop') {
                    return 'Canadian pop'.bold() + '<br> Canadian pop music is popular music, produced commercially in Canada.'
                } else if (this.id == 'rap') {
                    return 'Rap'.bold() + '<br> Rapping is a musical form of vocal delivery that incorporates "rhyme, rhythmic speech, and street vernacular", which is performed or chanted in a variety of ways, usually over a backing beat or musical accompaniment. The components of rap include "content" (what is being said), "flow" (rhythm, rhyme), and "delivery" (cadence, tone). Rap being a primary ingredient of hip-hop music it is commonly associated with that genre in particular; however, the origins of rap predate hip-hop culture by many years.'
                } else if (this.id == 'hip hop') {
                    return 'Hip hop'.bold() + '<br> Hip hop music is a genre of popular music developed in the United States by inner-city African Americans and Caribbean Americans in the Bronx borough of New York City in the 70s. It consists of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted. The term <i>hip hop music</i> is sometimes used synonymously with the term <i>rap music</i>, though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks.'
                } else if (this.id == 'trap') {
                    return 'Trap'.bold() + '<br> Trap is a subgenre of hip hop music that originated in the Southern United States during the early 2000s. The genre gets its name from the Atlanta lang word "trap", a house used exclusively to sell drugs. Trap music uses synthesized drums and is characterized by complex hi-hat patterns, tuned kick drums with a long, and lyrical content that often focuses on drug use and urban violence. It utilizes very few instruments and focuses almost exclusively on snare drums and double- or triple-timed hi-hats. '
                } else if (this.id == 'k-p') {
                    return 'K-pop'.bold() + '<br> K-pop, short for Korean popular music, is a form of popular music originating in South Korea as part of South Korean culture. It includes styles and genres from around the world, such as pop, hip hop, R&B, experimental, rock, jazz, gospel, reggae, electronic dance, country, disco, and classical on top of its traditional Korean music roots. The term "K-pop" became popular in the 2000s.'
                } else if (this.id == 'k-pop boy group') {
                    return 'K-pop boy group'.bold() + '<br> Boy bands in K-pop music. A boy band or boy group is loosely defined as a vocal group consisting of young male singers, usually in their teenage years or in their twenties at the time of formation, singing love songs marketed towards girls. Many boy bands dance as well as sing, usually giving highly choreographed performances. '
                } else if (this.id == 'colombia') {
                    return 'Reggaeton colombiano'.bold() + '<br> Reggaeton produced commercially in Colombia'
                } else if (this.id == 'uk') {
                    return 'UK pop'.bold() + '<br> British pop music is popular music, produced commercially in the United Kingdom.'
                } else if (this.id == 'rap ') {
                    return 'Melodic rap'.bold() + '<br> Melodic rap, is a genre of music fusing the rhythm-based lyricism of hip hop music with pop music\'s preference for melodious vocals and catchy tunes. This genre gained mainstream popularity during the 90s. The lyrics are often lighthearted, with choruses similar to those heard in pop music.'
                } 
            },
            useHTML: true,
            valueDecimals: 2,
            style: {
                width: '50px'
            }
        },
        size: '98%'
    }]

},
function(chart){
    chart.container.lastChild.className = 'highcharts-tooltip';
    
});
