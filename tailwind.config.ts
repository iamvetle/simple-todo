// import type { Config } from 'tailwindcss'
// import colors from 'tailwindcss/colors'

// export default <Partial<Config>>{
export default {
    theme: {
    extend: {
        margin: {
        "verytight":"2px",
        "tight":"4px",
        "beside":"8px",
        "by":"16px",
        "distance":"32px",
        "doubleDistance": "64px",
        "tripleDistance":"128px",
        "fourTimesDistance":"256px",
        "fiveTimesDistance":"512px",
        "sixTimesDistance":"1024px",
        "sevenTimesDistance":"2048px"
        },
        fontSize: {
            // Hierarchy-based font sizes
            "heading1": '2.5rem',
            "heading2": '2rem',
            "heading3": '1.5rem',
            "subheading": '1.125rem',
            "body": '1rem',
            "caption": '.875rem',
            "mention":'0.75rem',
          },
        }
    },
    fontSize: {
        // Hierarchy-based font sizes
        "heading1": '2.5rem',
        "heading2": '2rem',
        "heading3": '1.5rem',
        "subheading": '1.125rem',
        "body": '1rem',
        "caption": '.875rem',
        "mention":'0.75rem',
      },
    
}


// 2 - verytight
// 4 - tight
// 8 - beside
// 16 - by
// 32 - distance
// 64 - doubleDistance
// 128 - tripleDistance
// 256 - fourTimesDistance
// 612 - sixTimesDistance 
// 1224 - twelveTimesDistance