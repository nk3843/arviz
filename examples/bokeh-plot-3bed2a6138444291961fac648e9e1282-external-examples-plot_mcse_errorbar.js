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
    
      
      
    
      var element = document.getElementById("ba1b2ad3-9a00-4de4-862e-92c559782c40");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ba1b2ad3-9a00-4de4-862e-92c559782c40' but no matching script tag was found.")
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
                    
                  var docs_json = '{"751c3847-8b56-45c2-b360-efbeb8edfadb":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"37349"},{"id":"37347"}]},"id":"37350","type":"Column"},{"attributes":{},"id":"37288","type":"DataRange1d"},{"attributes":{},"id":"37334","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37327","type":"MultiLine"},{"attributes":{},"id":"37286","type":"DataRange1d"},{"attributes":{"data_source":{"id":"37321"},"glyph":{"id":"37322"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37323"},"view":{"id":"37325"}},"id":"37324","type":"GlyphRenderer"},{"attributes":{},"id":"37335","type":"AllLabels"},{"attributes":{},"id":"37340","type":"UnionRenderers"},{"attributes":{"source":{"id":"37321"}},"id":"37325","type":"CDSView"},{"attributes":{},"id":"37341","type":"Selection"},{"attributes":{},"id":"37337","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"37326"},"glyph":{"id":"37327"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37328"},"view":{"id":"37330"}},"id":"37329","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"37343"},"selection_policy":{"id":"37342"}},"id":"37326","type":"ColumnDataSource"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"37337"},"major_label_policy":{"id":"37338"},"ticker":{"id":"37299"}},"id":"37298","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37322","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37310","type":"BoxAnnotation"},{"attributes":{},"id":"37338","type":"AllLabels"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37328","type":"MultiLine"},{"attributes":{},"id":"37290","type":"LinearScale"},{"attributes":{"source":{"id":"37326"}},"id":"37330","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37323","type":"Scatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37334"},"major_label_policy":{"id":"37335"},"ticker":{"id":"37295"}},"id":"37294","type":"LinearAxis"},{"attributes":{"text":"sigma_a"},"id":"37331","type":"Title"},{"attributes":{"toolbars":[{"id":"37312"}],"tools":[{"id":"37302"},{"id":"37303"},{"id":"37304"},{"id":"37305"},{"id":"37306"},{"id":"37307"},{"id":"37308"},{"id":"37309"}]},"id":"37348","type":"ProxyToolbar"},{"attributes":{},"id":"37295","type":"BasicTicker"},{"attributes":{"below":[{"id":"37294"}],"center":[{"id":"37297"},{"id":"37301"}],"height":500,"left":[{"id":"37298"}],"output_backend":"webgl","renderers":[{"id":"37324"},{"id":"37329"}],"title":{"id":"37331"},"toolbar":{"id":"37312"},"toolbar_location":null,"width":500,"x_range":{"id":"37286"},"x_scale":{"id":"37290"},"y_range":{"id":"37288"},"y_scale":{"id":"37292"}},"id":"37285","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"37309","type":"HoverTool"},{"attributes":{},"id":"37292","type":"LinearScale"},{"attributes":{"children":[[{"id":"37285"},0,0]]},"id":"37347","type":"GridBox"},{"attributes":{"axis":{"id":"37294"},"ticker":null},"id":"37297","type":"Grid"},{"attributes":{"toolbar":{"id":"37348"},"toolbar_location":"above"},"id":"37349","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37311","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"37298"},"dimension":1,"ticker":null},"id":"37301","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37341"},"selection_policy":{"id":"37340"}},"id":"37321","type":"ColumnDataSource"},{"attributes":{},"id":"37299","type":"BasicTicker"},{"attributes":{"overlay":{"id":"37310"}},"id":"37304","type":"BoxZoomTool"},{"attributes":{},"id":"37303","type":"PanTool"},{"attributes":{},"id":"37302","type":"ResetTool"},{"attributes":{},"id":"37308","type":"SaveTool"},{"attributes":{},"id":"37305","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"37311"}},"id":"37306","type":"LassoSelectTool"},{"attributes":{},"id":"37342","type":"UnionRenderers"},{"attributes":{},"id":"37307","type":"UndoTool"},{"attributes":{},"id":"37343","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"37302"},{"id":"37303"},{"id":"37304"},{"id":"37305"},{"id":"37306"},{"id":"37307"},{"id":"37308"},{"id":"37309"}]},"id":"37312","type":"Toolbar"}],"root_ids":["37350"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"751c3847-8b56-45c2-b360-efbeb8edfadb","root_ids":["37350"],"roots":{"37350":"ba1b2ad3-9a00-4de4-862e-92c559782c40"}}];
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