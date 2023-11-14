tailwind.config = {
  theme: {
    extend: {
      // color start 
      colors: {
        headerbg: 'rgba(23, 13, 110, 0.5)',
        hovercolor: '#1BBF00',
        buttonRegular:'#F9F9F9',
        bannerOverly:'rgba(107, 99, 197, 0.9)',
        h1color:'#FAFAFE;',
        pcolor:'#E6E5F3',
        h4color:'#141135',
        aftercolor:'rgba(79, 88, 95, 0.2)'
      },
      // color end

      //  container 
      maxWidth: {
        'headerContainer':'1170px',
        'bannerContainer':'1170px',
      },
        //  container

        // google font 

        fontFamily: {
        'openSans': ['Open Sans', 'sans-serif;'],
        'Paprika': ['Paprika', 'sans-serif;'],
      },
      // google font 
    // BACKGROUND image 
    backgroundImage: {
      'bannerImage': "url('images/Header.png')",
      'serviceImage': "url('images/Service Banner.png')",
      
    }
    // BACKGROUND image end
    }
  }
}