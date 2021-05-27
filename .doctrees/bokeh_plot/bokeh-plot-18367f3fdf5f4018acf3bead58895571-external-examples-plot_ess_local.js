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
    
      
      
    
      var element = document.getElementById("72e73922-d1f9-42ee-ad8f-ed2b701ee156");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '72e73922-d1f9-42ee-ad8f-ed2b701ee156' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2992f2ea-d294-42c5-ba72-af4f43725a03":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18406","type":"SaveTool"},{"attributes":{"axis":{"id":"18396"},"dimension":1,"ticker":null},"id":"18399","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18420","type":"Circle"},{"attributes":{"source":{"id":"18425"}},"id":"18427","type":"CDSView"},{"attributes":{},"id":"18388","type":"LinearScale"},{"attributes":{},"id":"18397","type":"BasicTicker"},{"attributes":{},"id":"18433","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"18408"}},"id":"18402","type":"BoxZoomTool"},{"attributes":{},"id":"18393","type":"BasicTicker"},{"attributes":{"axis":{"id":"18392"},"ticker":null},"id":"18395","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18421","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18433"},"major_label_policy":{"id":"18434"},"ticker":{"id":"18393"}},"id":"18392","type":"LinearAxis"},{"attributes":{},"id":"18440","type":"Selection"},{"attributes":{},"id":"18442","type":"Selection"},{"attributes":{"data_source":{"id":"18425"},"glyph":{"id":"18424"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18427"}},"id":"18426","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18436"},"major_label_policy":{"id":"18437"},"ticker":{"id":"18397"}},"id":"18396","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18409","type":"PolyAnnotation"},{"attributes":{"text":"mu"},"id":"18430","type":"Title"},{"attributes":{},"id":"18386","type":"DataRange1d"},{"attributes":{"source":{"id":"18419"}},"id":"18423","type":"CDSView"},{"attributes":{},"id":"18441","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"18383"},0,0]]},"id":"18446","type":"GridBox"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18429","type":"Span"},{"attributes":{},"id":"18405","type":"UndoTool"},{"attributes":{},"id":"18390","type":"LinearScale"},{"attributes":{},"id":"18403","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"18392"}],"center":[{"id":"18395"},{"id":"18399"}],"height":500,"left":[{"id":"18396"}],"output_backend":"webgl","renderers":[{"id":"18422"},{"id":"18426"},{"id":"18428"},{"id":"18429"}],"title":{"id":"18430"},"toolbar":{"id":"18410"},"toolbar_location":null,"width":500,"x_range":{"id":"18384"},"x_scale":{"id":"18388"},"y_range":{"id":"18386"},"y_scale":{"id":"18390"}},"id":"18383","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"18409"}},"id":"18404","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"18407","type":"HoverTool"},{"attributes":{"data_source":{"id":"18419"},"glyph":{"id":"18420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18421"},"view":{"id":"18423"}},"id":"18422","type":"GlyphRenderer"},{"attributes":{},"id":"18400","type":"ResetTool"},{"attributes":{},"id":"18434","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18440"},"selection_policy":{"id":"18439"}},"id":"18419","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18428","type":"Span"},{"attributes":{},"id":"18437","type":"AllLabels"},{"attributes":{"toolbar":{"id":"18447"},"toolbar_location":"above"},"id":"18448","type":"ToolbarBox"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18442"},"selection_policy":{"id":"18441"}},"id":"18425","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18424","type":"Scatter"},{"attributes":{},"id":"18436","type":"BasicTickFormatter"},{"attributes":{},"id":"18384","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18408","type":"BoxAnnotation"},{"attributes":{},"id":"18401","type":"PanTool"},{"attributes":{},"id":"18439","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"18410"}],"tools":[{"id":"18400"},{"id":"18401"},{"id":"18402"},{"id":"18403"},{"id":"18404"},{"id":"18405"},{"id":"18406"},{"id":"18407"}]},"id":"18447","type":"ProxyToolbar"},{"attributes":{"active_multi":null,"tools":[{"id":"18400"},{"id":"18401"},{"id":"18402"},{"id":"18403"},{"id":"18404"},{"id":"18405"},{"id":"18406"},{"id":"18407"}]},"id":"18410","type":"Toolbar"},{"attributes":{"children":[{"id":"18448"},{"id":"18446"}]},"id":"18449","type":"Column"}],"root_ids":["18449"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"2992f2ea-d294-42c5-ba72-af4f43725a03","root_ids":["18449"],"roots":{"18449":"72e73922-d1f9-42ee-ad8f-ed2b701ee156"}}];
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