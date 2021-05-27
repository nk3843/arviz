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
    
      
      
    
      var element = document.getElementById("6548c48d-91d4-4bb8-a4f9-7b8dc47d477c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6548c48d-91d4-4bb8-a4f9-7b8dc47d477c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ec41cb1b-57a8-46ea-b8b4-0c280b887532":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14938"},"major_label_policy":{"id":"14939"},"ticker":{"id":"14906"}},"id":"14905","type":"LinearAxis"},{"attributes":{"children":[[{"id":"14892"},0,0]]},"id":"14946","type":"GridBox"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14942"},"selection_policy":{"id":"14941"}},"id":"14929","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"14901"},"ticker":null},"id":"14904","type":"Grid"},{"attributes":{"overlay":{"id":"14917"}},"id":"14911","type":"BoxZoomTool"},{"attributes":{"text":"centered model - non centered model"},"id":"14932","type":"Title"},{"attributes":{},"id":"14941","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"14916","type":"HoverTool"},{"attributes":{},"id":"14936","type":"AllLabels"},{"attributes":{"toolbar":{"id":"14947"},"toolbar_location":"above"},"id":"14948","type":"ToolbarBox"},{"attributes":{},"id":"14899","type":"LinearScale"},{"attributes":{},"id":"14912","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14928","type":"Scatter"},{"attributes":{"children":[{"id":"14948"},{"id":"14946"}]},"id":"14949","type":"Column"},{"attributes":{},"id":"14906","type":"BasicTicker"},{"attributes":{"source":{"id":"14929"}},"id":"14931","type":"CDSView"},{"attributes":{},"id":"14893","type":"DataRange1d"},{"attributes":{},"id":"14897","type":"LinearScale"},{"attributes":{},"id":"14915","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14918","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"14935"},"major_label_policy":{"id":"14936"},"ticker":{"id":"14902"}},"id":"14901","type":"LinearAxis"},{"attributes":{},"id":"14939","type":"AllLabels"},{"attributes":{},"id":"14942","type":"Selection"},{"attributes":{"axis":{"id":"14905"},"dimension":1,"ticker":null},"id":"14908","type":"Grid"},{"attributes":{"overlay":{"id":"14918"}},"id":"14913","type":"LassoSelectTool"},{"attributes":{},"id":"14910","type":"PanTool"},{"attributes":{"active_multi":null,"tools":[{"id":"14909"},{"id":"14910"},{"id":"14911"},{"id":"14912"},{"id":"14913"},{"id":"14914"},{"id":"14915"},{"id":"14916"}]},"id":"14919","type":"Toolbar"},{"attributes":{},"id":"14914","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"14919"}],"tools":[{"id":"14909"},{"id":"14910"},{"id":"14911"},{"id":"14912"},{"id":"14913"},{"id":"14914"},{"id":"14915"},{"id":"14916"}]},"id":"14947","type":"ProxyToolbar"},{"attributes":{},"id":"14909","type":"ResetTool"},{"attributes":{},"id":"14902","type":"BasicTicker"},{"attributes":{},"id":"14938","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"14901"}],"center":[{"id":"14904"},{"id":"14908"}],"height":288,"left":[{"id":"14905"}],"output_backend":"webgl","renderers":[{"id":"14930"}],"title":{"id":"14932"},"toolbar":{"id":"14919"},"toolbar_location":null,"width":432,"x_range":{"id":"14893"},"x_scale":{"id":"14897"},"y_range":{"id":"14895"},"y_scale":{"id":"14899"}},"id":"14892","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14935","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14917","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"14929"},"glyph":{"id":"14928"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14931"}},"id":"14930","type":"GlyphRenderer"},{"attributes":{},"id":"14895","type":"DataRange1d"}],"root_ids":["14949"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"ec41cb1b-57a8-46ea-b8b4-0c280b887532","root_ids":["14949"],"roots":{"14949":"6548c48d-91d4-4bb8-a4f9-7b8dc47d477c"}}];
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