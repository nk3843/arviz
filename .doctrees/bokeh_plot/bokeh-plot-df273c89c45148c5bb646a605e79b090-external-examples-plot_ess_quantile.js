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
    
      
      
    
      var element = document.getElementById("c0e1c0fb-cb50-4dd9-85cf-9d90ae8ab9c2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0e1c0fb-cb50-4dd9-85cf-9d90ae8ab9c2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"67bceb1a-9863-4eab-bbae-32a4790405c0":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18519","type":"ResetTool"},{"attributes":{},"id":"18525","type":"SaveTool"},{"attributes":{"children":[[{"id":"18502"},0,0]]},"id":"18558","type":"GridBox"},{"attributes":{},"id":"18553","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18528","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"18527"}},"id":"18521","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18540","type":"Circle"},{"attributes":{},"id":"18524","type":"UndoTool"},{"attributes":{"data_source":{"id":"18538"},"glyph":{"id":"18539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18540"},"view":{"id":"18542"}},"id":"18541","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"18519"},{"id":"18520"},{"id":"18521"},{"id":"18522"},{"id":"18523"},{"id":"18524"},{"id":"18525"},{"id":"18526"}]},"id":"18529","type":"Toolbar"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"18550"},"major_label_policy":{"id":"18551"},"ticker":{"id":"18516"}},"id":"18515","type":"LinearAxis"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18547"},"major_label_policy":{"id":"18548"},"ticker":{"id":"18512"}},"id":"18511","type":"LinearAxis"},{"attributes":{"text":"sigma"},"id":"18544","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18539","type":"Circle"},{"attributes":{"axis":{"id":"18511"},"ticker":null},"id":"18514","type":"Grid"},{"attributes":{},"id":"18507","type":"LinearScale"},{"attributes":{},"id":"18522","type":"WheelZoomTool"},{"attributes":{"source":{"id":"18538"}},"id":"18542","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18554"},"selection_policy":{"id":"18553"}},"id":"18538","type":"ColumnDataSource"},{"attributes":{},"id":"18554","type":"Selection"},{"attributes":{"callback":null},"id":"18526","type":"HoverTool"},{"attributes":{"overlay":{"id":"18528"}},"id":"18523","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"18515"},"dimension":1,"ticker":null},"id":"18518","type":"Grid"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18543","type":"Span"},{"attributes":{"below":[{"id":"18511"}],"center":[{"id":"18514"},{"id":"18518"}],"height":500,"left":[{"id":"18515"}],"output_backend":"webgl","renderers":[{"id":"18541"},{"id":"18543"}],"title":{"id":"18544"},"toolbar":{"id":"18529"},"toolbar_location":null,"width":500,"x_range":{"id":"18503"},"x_scale":{"id":"18507"},"y_range":{"id":"18505"},"y_scale":{"id":"18509"}},"id":"18502","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"18560"},{"id":"18558"}]},"id":"18561","type":"Column"},{"attributes":{},"id":"18509","type":"LinearScale"},{"attributes":{},"id":"18548","type":"AllLabels"},{"attributes":{"toolbar":{"id":"18559"},"toolbar_location":"above"},"id":"18560","type":"ToolbarBox"},{"attributes":{},"id":"18516","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18527","type":"BoxAnnotation"},{"attributes":{},"id":"18551","type":"AllLabels"},{"attributes":{},"id":"18520","type":"PanTool"},{"attributes":{},"id":"18512","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"18529"}],"tools":[{"id":"18519"},{"id":"18520"},{"id":"18521"},{"id":"18522"},{"id":"18523"},{"id":"18524"},{"id":"18525"},{"id":"18526"}]},"id":"18559","type":"ProxyToolbar"},{"attributes":{},"id":"18547","type":"BasicTickFormatter"},{"attributes":{},"id":"18505","type":"DataRange1d"},{"attributes":{},"id":"18550","type":"BasicTickFormatter"},{"attributes":{},"id":"18503","type":"DataRange1d"}],"root_ids":["18561"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"67bceb1a-9863-4eab-bbae-32a4790405c0","root_ids":["18561"],"roots":{"18561":"c0e1c0fb-cb50-4dd9-85cf-9d90ae8ab9c2"}}];
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