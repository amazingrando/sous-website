/* eslint-disable */ 
import {ScratchCard, SCRATCH_TYPE} from 'scratchcard-js'

Drupal.behaviors.article = {
  attach(context) {
    const scContainer1 = context.getElementById('js-canvas-1')
    const scContainer2 = context.getElementById('js-canvas-2')
    const scContainer3 = context.getElementById('js-canvas-3') 
    const scContainer4 = context.getElementById('js-canvas-4')
    const scContainer5 = context.getElementById('js-canvas-5')
    const scContainer6 = context.getElementById('js-canvas-6') 

    const sc1 = new ScratchCard('#js-canvas-1', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer1.offsetWidth,
      containerHeight: 309,
      imageForwardSrc: 'https://source.unsplash.com/cPZ21gvclO8/500x400',
      imageBackgroundSrc: 'https://source.unsplash.com/n-vnWQmmVoY/500x400',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4, 
      callback: function() {
        console.log('done')
      },
    })
    const sc2 = new ScratchCard('#js-canvas-2', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer2.offsetWidth,
      containerHeight: 309,
      imageForwardSrc: 'https://source.unsplash.com/cPZ21gvclO8/500x400',
      imageBackgroundSrc: 'https://source.unsplash.com/t2Sai-AqIpI/500x400',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4, 
      callback: function() {
        console.log('done')
      },
    })
    const sc3 = new ScratchCard('#js-canvas-3', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer3.offsetWidth,
      containerHeight: 309,
      imageForwardSrc: 'https://source.unsplash.com/cPZ21gvclO8/500x400',
      imageBackgroundSrc: 'https://source.unsplash.com/26GffjN9B0o/500x400',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4, 
      callback: function() {
        console.log('done')
      },
    })
    
    const sc4 = new ScratchCard('#js-canvas-4', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer4.offsetWidth,
      containerHeight: 309,
      imageForwardSrc: 'https://source.unsplash.com/cPZ21gvclO8/500x400',
      imageBackgroundSrc: 'https://source.unsplash.com/0WAJhFK7Q9o/500x400',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4, 
      callback: function() {
        console.log('done')
      },
    })
    const sc5 = new ScratchCard('#js-canvas-5', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer5.offsetWidth,
      containerHeight: 309,
      imageForwardSrc: 'https://source.unsplash.com/cPZ21gvclO8/500x400',
      imageBackgroundSrc: 'https://source.unsplash.com/45DMP6-AUpY/500x400',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4, 
      callback: function() {
        console.log('done')
      },
    })
    const sc6 = new ScratchCard('#js-canvas-6', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer6.offsetWidth,
      containerHeight: 309,
      imageForwardSrc: 'https://source.unsplash.com/cPZ21gvclO8/500x400',
      imageBackgroundSrc: 'https://source.unsplash.com/RYT0Bg14u8k/500x400',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4, 
      callback: function() {
        console.log('done') 
      },
    })

    console.log('fired');

    // Init
    sc1.init().then(() => {
      sc1.canvas.addEventListener('scratch.move', () => {
        let percent = sc1.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });

    sc2.init().then(() => {
      sc2.canvas.addEventListener('scratch.move', () => {
        let percent = sc2.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });
    
    sc3.init().then(() => {
      sc3.canvas.addEventListener('scratch.move', () => {
        let percent = sc3.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });
    
    sc4.init().then(() => {
      sc4.canvas.addEventListener('scratch.move', () => {
        let percent = sc4.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });
    
    sc5.init().then(() => {
      sc5.canvas.addEventListener('scratch.move', () => {
        let percent = sc5.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });

    sc6.init().then(() => {
      sc6.canvas.addEventListener('scratch.move', () => {
        let percent = sc6.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });
  },
};