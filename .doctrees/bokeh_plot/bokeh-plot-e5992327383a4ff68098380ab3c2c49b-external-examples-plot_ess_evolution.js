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
    
      
      
    
      var element = document.getElementById("52e2c23b-328a-457d-98f7-058e4b1fbbc9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '52e2c23b-328a-457d-98f7-058e4b1fbbc9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"19e6296b-1977-4b77-88df-619449e844bf":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18245","type":"BasicTicker"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18297"},"major_label_policy":{"id":"18298"},"ticker":{"id":"18245"}},"id":"18244","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18307"},"selection_policy":{"id":"18306"}},"id":"18282","type":"ColumnDataSource"},{"attributes":{},"id":"18302","type":"UnionRenderers"},{"attributes":{},"id":"18298","type":"AllLabels"},{"attributes":{"axis":{"id":"18244"},"dimension":1,"ticker":null},"id":"18247","type":"Grid"},{"attributes":{},"id":"18303","type":"Selection"},{"attributes":{},"id":"18305","type":"Selection"},{"attributes":{"callback":null},"id":"18255","type":"HoverTool"},{"attributes":{"data_source":{"id":"18282"},"glyph":{"id":"18283"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18284"},"view":{"id":"18286"}},"id":"18285","type":"GlyphRenderer"},{"attributes":{},"id":"18241","type":"BasicTicker"},{"attributes":{"above":[{"id":"18288"}],"below":[{"id":"18240"}],"center":[{"id":"18243"},{"id":"18247"}],"height":500,"left":[{"id":"18244"}],"output_backend":"webgl","renderers":[{"id":"18270"},{"id":"18275"},{"id":"18280"},{"id":"18285"},{"id":"18287"}],"title":{"id":"18291"},"toolbar":{"id":"18258"},"toolbar_location":null,"width":500,"x_range":{"id":"18232"},"x_scale":{"id":"18236"},"y_range":{"id":"18234"},"y_scale":{"id":"18238"}},"id":"18231","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18306","type":"UnionRenderers"},{"attributes":{},"id":"18304","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"18231"},0,0]]},"id":"18311","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18256","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"18258"}],"tools":[{"id":"18248"},{"id":"18249"},{"id":"18250"},{"id":"18251"},{"id":"18252"},{"id":"18253"},{"id":"18254"},{"id":"18255"}]},"id":"18312","type":"ProxyToolbar"},{"attributes":{"click_policy":"hide","items":[{"id":"18289"},{"id":"18290"}],"location":"center_right","orientation":"horizontal"},"id":"18288","type":"Legend"},{"attributes":{"data_source":{"id":"18277"},"glyph":{"id":"18278"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18279"},"view":{"id":"18281"}},"id":"18280","type":"GlyphRenderer"},{"attributes":{},"id":"18295","type":"AllLabels"},{"attributes":{"source":{"id":"18272"}},"id":"18276","type":"CDSView"},{"attributes":{},"id":"18248","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18268","type":"Circle"},{"attributes":{},"id":"18307","type":"Selection"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18287","type":"Span"},{"attributes":{"text":"b"},"id":"18291","type":"Title"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18283","type":"Circle"},{"attributes":{},"id":"18249","type":"PanTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18285"},{"id":"18280"}]},"id":"18290","type":"LegendItem"},{"attributes":{},"id":"18301","type":"Selection"},{"attributes":{"children":[{"id":"18313"},{"id":"18311"}]},"id":"18314","type":"Column"},{"attributes":{},"id":"18236","type":"LinearScale"},{"attributes":{"source":{"id":"18267"}},"id":"18271","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18278","type":"Line"},{"attributes":{},"id":"18297","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18282"}},"id":"18286","type":"CDSView"},{"attributes":{"axis":{"id":"18240"},"ticker":null},"id":"18243","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18279","type":"Line"},{"attributes":{"source":{"id":"18277"}},"id":"18281","type":"CDSView"},{"attributes":{},"id":"18254","type":"SaveTool"},{"attributes":{"overlay":{"id":"18256"}},"id":"18250","type":"BoxZoomTool"},{"attributes":{},"id":"18294","type":"BasicTickFormatter"},{"attributes":{},"id":"18251","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18274","type":"Line"},{"attributes":{},"id":"18238","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18303"},"selection_policy":{"id":"18302"}},"id":"18272","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18284","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18269","type":"Circle"},{"attributes":{},"id":"18300","type":"UnionRenderers"},{"attributes":{},"id":"18234","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18272"},"glyph":{"id":"18273"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18274"},"view":{"id":"18276"}},"id":"18275","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18257","type":"PolyAnnotation"},{"attributes":{},"id":"18232","type":"DataRange1d"},{"attributes":{},"id":"18253","type":"UndoTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18270"},{"id":"18275"}]},"id":"18289","type":"LegendItem"},{"attributes":{"data_source":{"id":"18267"},"glyph":{"id":"18268"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18269"},"view":{"id":"18271"}},"id":"18270","type":"GlyphRenderer"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18294"},"major_label_policy":{"id":"18295"},"ticker":{"id":"18241"}},"id":"18240","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"18312"},"toolbar_location":"above"},"id":"18313","type":"ToolbarBox"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18273","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"18248"},{"id":"18249"},{"id":"18250"},{"id":"18251"},{"id":"18252"},{"id":"18253"},{"id":"18254"},{"id":"18255"}]},"id":"18258","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18305"},"selection_policy":{"id":"18304"}},"id":"18277","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18301"},"selection_policy":{"id":"18300"}},"id":"18267","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18257"}},"id":"18252","type":"LassoSelectTool"}],"root_ids":["18314"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"19e6296b-1977-4b77-88df-619449e844bf","root_ids":["18314"],"roots":{"18314":"52e2c23b-328a-457d-98f7-058e4b1fbbc9"}}];
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