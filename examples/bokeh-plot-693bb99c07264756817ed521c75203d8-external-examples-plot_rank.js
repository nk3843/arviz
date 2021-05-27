(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("34e09396-9494-4205-a15c-d73331258c3d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '34e09396-9494-4205-a15c-d73331258c3d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"db2f36d6-b7ac-43da-b1e9-29e5c85a4349":{"defs":[],"roots":{"references":[{"attributes":{},"id":"43276","type":"Selection"},{"attributes":{"data_source":{"id":"43245"},"glyph":{"id":"43246"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43247"},"view":{"id":"43249"}},"id":"43248","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43246","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43200","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43293"},"selection_policy":{"id":"43292"}},"id":"43245","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43253","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43252","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"43250","type":"Span"},{"attributes":{},"id":"43292","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"43256","type":"Span"},{"attributes":{},"id":"43293","type":"Selection"},{"attributes":{"data_source":{"id":"43239"},"glyph":{"id":"43240"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43241"},"view":{"id":"43243"}},"id":"43242","type":"GlyphRenderer"},{"attributes":{"source":{"id":"43245"}},"id":"43249","type":"CDSView"},{"attributes":{"overlay":{"id":"43167"}},"id":"43162","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43295"},"selection_policy":{"id":"43294"}},"id":"43251","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43201","type":"PolyAnnotation"},{"attributes":{},"id":"43158","type":"ResetTool"},{"attributes":{},"id":"43277","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"43158"},{"id":"43159"},{"id":"43160"},{"id":"43161"},{"id":"43162"},{"id":"43163"},{"id":"43164"},{"id":"43165"}]},"id":"43168","type":"Toolbar"},{"attributes":{},"id":"43182","type":"LinearScale"},{"attributes":{},"id":"43278","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43247","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43166","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"43150"}],"center":[{"id":"43153"},{"id":"43157"},{"id":"43216"},{"id":"43222"},{"id":"43228"},{"id":"43234"}],"height":331,"left":[{"id":"43154"}],"output_backend":"webgl","renderers":[{"id":"43214"},{"id":"43220"},{"id":"43226"},{"id":"43232"}],"title":{"id":"43237"},"toolbar":{"id":"43168"},"toolbar_location":null,"width":496,"x_range":{"id":"43142"},"x_scale":{"id":"43146"},"y_range":{"id":"43144"},"y_scale":{"id":"43148"}},"id":"43141","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43159","type":"PanTool"},{"attributes":{},"id":"43294","type":"UnionRenderers"},{"attributes":{},"id":"43295","type":"Selection"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"43216","type":"Span"},{"attributes":{},"id":"43180","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43167","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"43166"}},"id":"43160","type":"BoxZoomTool"},{"attributes":{},"id":"43279","type":"UnionRenderers"},{"attributes":{},"id":"43280","type":"Selection"},{"attributes":{"axis":{"id":"43184"},"ticker":null},"id":"43187","type":"Grid"},{"attributes":{},"id":"43268","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43274"},"selection_policy":{"id":"43273"}},"id":"43211","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43219","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43213","type":"VBar"},{"attributes":{},"id":"43148","type":"LinearScale"},{"attributes":{},"id":"43269","type":"AllLabels"},{"attributes":{"source":{"id":"43211"}},"id":"43215","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43271"},"major_label_policy":{"id":"43272"},"ticker":{"id":"43235"}},"id":"43154","type":"LinearAxis"},{"attributes":{},"id":"43296","type":"UnionRenderers"},{"attributes":{},"id":"43297","type":"Selection"},{"attributes":{"text":"tau"},"id":"43237","type":"Title"},{"attributes":{},"id":"43271","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"43211"},"glyph":{"id":"43212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43213"},"view":{"id":"43215"}},"id":"43214","type":"GlyphRenderer"},{"attributes":{},"id":"43151","type":"BasicTicker"},{"attributes":{"source":{"id":"43217"}},"id":"43221","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43218","type":"VBar"},{"attributes":{},"id":"43285","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43276"},"selection_policy":{"id":"43275"}},"id":"43217","type":"ColumnDataSource"},{"attributes":{},"id":"43163","type":"UndoTool"},{"attributes":{},"id":"43272","type":"AllLabels"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"43222","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43224","type":"VBar"},{"attributes":{},"id":"43146","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43230","type":"VBar"},{"attributes":{"data_source":{"id":"43217"},"glyph":{"id":"43218"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43219"},"view":{"id":"43221"}},"id":"43220","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"43154"},"dimension":1,"ticker":null},"id":"43157","type":"Grid"},{"attributes":{},"id":"43286","type":"AllLabels"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"43228","type":"Span"},{"attributes":{"callback":null},"id":"43199","type":"HoverTool"},{"attributes":{"source":{"id":"43223"}},"id":"43227","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43268"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43269"},"ticker":{"id":"43151"}},"id":"43150","type":"LinearAxis"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43288"},"major_label_policy":{"id":"43289"},"ticker":{"id":"43263"}},"id":"43188","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43278"},"selection_policy":{"id":"43277"}},"id":"43223","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43285"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43286"},"ticker":{"id":"43185"}},"id":"43184","type":"LinearAxis"},{"attributes":{},"id":"43288","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43225","type":"VBar"},{"attributes":{},"id":"43185","type":"BasicTicker"},{"attributes":{"source":{"id":"43257"}},"id":"43261","type":"CDSView"},{"attributes":{"data_source":{"id":"43223"},"glyph":{"id":"43224"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43225"},"view":{"id":"43227"}},"id":"43226","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43258","type":"VBar"},{"attributes":{"axis":{"id":"43188"},"dimension":1,"ticker":null},"id":"43191","type":"Grid"},{"attributes":{},"id":"43289","type":"AllLabels"},{"attributes":{"data_source":{"id":"43251"},"glyph":{"id":"43252"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43253"},"view":{"id":"43255"}},"id":"43254","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"43265","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43280"},"selection_policy":{"id":"43279"}},"id":"43229","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43212","type":"VBar"},{"attributes":{"source":{"id":"43251"}},"id":"43255","type":"CDSView"},{"attributes":{"overlay":{"id":"43200"}},"id":"43194","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"43165","type":"HoverTool"},{"attributes":{},"id":"43193","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43259","type":"VBar"},{"attributes":{},"id":"43192","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"43262","type":"Span"},{"attributes":{"data_source":{"id":"43229"},"glyph":{"id":"43230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43231"},"view":{"id":"43233"}},"id":"43232","type":"GlyphRenderer"},{"attributes":{},"id":"43273","type":"UnionRenderers"},{"attributes":{},"id":"43198","type":"SaveTool"},{"attributes":{},"id":"43274","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43297"},"selection_policy":{"id":"43296"}},"id":"43257","type":"ColumnDataSource"},{"attributes":{},"id":"43195","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"43201"}},"id":"43196","type":"LassoSelectTool"},{"attributes":{},"id":"43197","type":"UndoTool"},{"attributes":{"axis":{"id":"43150"},"ticker":null},"id":"43153","type":"Grid"},{"attributes":{"data_source":{"id":"43257"},"glyph":{"id":"43258"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43259"},"view":{"id":"43261"}},"id":"43260","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"43192"},{"id":"43193"},{"id":"43194"},{"id":"43195"},{"id":"43196"},{"id":"43197"},{"id":"43198"},{"id":"43199"}]},"id":"43202","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43291"},"selection_policy":{"id":"43290"}},"id":"43239","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43231","type":"VBar"},{"attributes":{},"id":"43142","type":"DataRange1d"},{"attributes":{"children":[[{"id":"43141"},0,0],[{"id":"43177"},0,1]]},"id":"43301","type":"GridBox"},{"attributes":{},"id":"43290","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"43168"},{"id":"43202"}],"tools":[{"id":"43158"},{"id":"43159"},{"id":"43160"},{"id":"43161"},{"id":"43162"},{"id":"43163"},{"id":"43164"},{"id":"43165"},{"id":"43192"},{"id":"43193"},{"id":"43194"},{"id":"43195"},{"id":"43196"},{"id":"43197"},{"id":"43198"},{"id":"43199"}]},"id":"43302","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"43303"},{"id":"43301"}]},"id":"43304","type":"Column"},{"attributes":{"source":{"id":"43229"}},"id":"43233","type":"CDSView"},{"attributes":{},"id":"43291","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"43235","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43240","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43241","type":"VBar"},{"attributes":{"toolbar":{"id":"43302"},"toolbar_location":"above"},"id":"43303","type":"ToolbarBox"},{"attributes":{"below":[{"id":"43184"}],"center":[{"id":"43187"},{"id":"43191"},{"id":"43244"},{"id":"43250"},{"id":"43256"},{"id":"43262"}],"height":331,"left":[{"id":"43188"}],"output_backend":"webgl","renderers":[{"id":"43242"},{"id":"43248"},{"id":"43254"},{"id":"43260"}],"title":{"id":"43265"},"toolbar":{"id":"43202"},"toolbar_location":null,"width":496,"x_range":{"id":"43142"},"x_scale":{"id":"43180"},"y_range":{"id":"43144"},"y_scale":{"id":"43182"}},"id":"43177","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43161","type":"WheelZoomTool"},{"attributes":{},"id":"43144","type":"DataRange1d"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"43234","type":"Span"},{"attributes":{},"id":"43164","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"43244","type":"Span"},{"attributes":{"source":{"id":"43239"}},"id":"43243","type":"CDSView"},{"attributes":{},"id":"43275","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"43263","type":"FixedTicker"}],"root_ids":["43304"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"db2f36d6-b7ac-43da-b1e9-29e5c85a4349","root_ids":["43304"],"roots":{"43304":"34e09396-9494-4205-a15c-d73331258c3d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();