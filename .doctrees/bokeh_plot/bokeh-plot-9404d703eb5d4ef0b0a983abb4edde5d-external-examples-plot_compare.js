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
    
      
      
    
      var element = document.getElementById("f68cd3e9-a44c-4a96-8c3c-5201a14eb5b0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f68cd3e9-a44c-4a96-8c3c-5201a14eb5b0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"185f07b2-891a-4aab-9568-31b3dacc7a95":{"defs":[],"roots":{"references":[{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15740","type":"Span"},{"attributes":{},"id":"15743","type":"BasicTickFormatter"},{"attributes":{},"id":"15749","type":"Selection"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15721","type":"MultiLine"},{"attributes":{"data_source":{"id":"15735"},"glyph":{"id":"15736"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15737"},"view":{"id":"15739"}},"id":"15738","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15715"}},"id":"15719","type":"CDSView"},{"attributes":{},"id":"15748","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15749"},"selection_policy":{"id":"15748"}},"id":"15715","type":"ColumnDataSource"},{"attributes":{},"id":"15754","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"15725"},"glyph":{"id":"15726"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15727"},"view":{"id":"15729"}},"id":"15728","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15720"},"glyph":{"id":"15721"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15722"},"view":{"id":"15724"}},"id":"15723","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15716","type":"Scatter"},{"attributes":{"below":[{"id":"15686"}],"center":[{"id":"15689"},{"id":"15693"}],"height":500,"left":[{"id":"15690"}],"output_backend":"webgl","renderers":[{"id":"15718"},{"id":"15723"},{"id":"15728"},{"id":"15733"},{"id":"15738"},{"id":"15740"}],"title":{"id":"15741"},"toolbar":{"id":"15704"},"toolbar_location":null,"width":500,"x_range":{"id":"15678"},"x_scale":{"id":"15682"},"y_range":{"id":"15680"},"y_scale":{"id":"15684"}},"id":"15677","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"15746"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15747"},"ticker":{"id":"15713"}},"id":"15690","type":"LinearAxis"},{"attributes":{"overlay":{"id":"15703"}},"id":"15698","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"15677"},0,0]]},"id":"15761","type":"GridBox"},{"attributes":{},"id":"15747","type":"AllLabels"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15732","type":"MultiLine"},{"attributes":{},"id":"15750","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15702","type":"BoxAnnotation"},{"attributes":{"source":{"id":"15725"}},"id":"15729","type":"CDSView"},{"attributes":{},"id":"15757","type":"Selection"},{"attributes":{},"id":"15700","type":"SaveTool"},{"attributes":{},"id":"15741","type":"Title"},{"attributes":{},"id":"15697","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"15704"}],"tools":[{"id":"15694"},{"id":"15695"},{"id":"15696"},{"id":"15697"},{"id":"15698"},{"id":"15699"},{"id":"15700"},{"id":"15701"}]},"id":"15762","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"15730"},"glyph":{"id":"15731"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15732"},"view":{"id":"15734"}},"id":"15733","type":"GlyphRenderer"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15731","type":"MultiLine"},{"attributes":{"overlay":{"id":"15702"}},"id":"15696","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15753"},"selection_policy":{"id":"15752"}},"id":"15725","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15726","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15703","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"15690"},"dimension":1,"ticker":null},"id":"15693","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15722","type":"MultiLine"},{"attributes":{},"id":"15746","type":"BasicTickFormatter"},{"attributes":{},"id":"15678","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15736","type":"Circle"},{"attributes":{"callback":null},"id":"15701","type":"HoverTool"},{"attributes":{},"id":"15695","type":"PanTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15751"},"selection_policy":{"id":"15750"}},"id":"15720","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15735"}},"id":"15739","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15757"},"selection_policy":{"id":"15756"}},"id":"15735","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"15686"},"ticker":null},"id":"15689","type":"Grid"},{"attributes":{},"id":"15699","type":"UndoTool"},{"attributes":{},"id":"15756","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"15680","type":"DataRange1d"},{"attributes":{},"id":"15687","type":"BasicTicker"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15755"},"selection_policy":{"id":"15754"}},"id":"15730","type":"ColumnDataSource"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15713","type":"FixedTicker"},{"attributes":{},"id":"15755","type":"Selection"},{"attributes":{"data_source":{"id":"15715"},"glyph":{"id":"15716"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15717"},"view":{"id":"15719"}},"id":"15718","type":"GlyphRenderer"},{"attributes":{},"id":"15752","type":"UnionRenderers"},{"attributes":{"source":{"id":"15730"}},"id":"15734","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15737","type":"Circle"},{"attributes":{},"id":"15684","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15727","type":"Circle"},{"attributes":{"toolbar":{"id":"15762"},"toolbar_location":"above"},"id":"15763","type":"ToolbarBox"},{"attributes":{"source":{"id":"15720"}},"id":"15724","type":"CDSView"},{"attributes":{},"id":"15744","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"15694"},{"id":"15695"},{"id":"15696"},{"id":"15697"},{"id":"15698"},{"id":"15699"},{"id":"15700"},{"id":"15701"}]},"id":"15704","type":"Toolbar"},{"attributes":{},"id":"15682","type":"LinearScale"},{"attributes":{},"id":"15694","type":"ResetTool"},{"attributes":{"children":[{"id":"15763"},{"id":"15761"}]},"id":"15764","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15717","type":"Scatter"},{"attributes":{"axis_label":"Log","formatter":{"id":"15743"},"major_label_policy":{"id":"15744"},"ticker":{"id":"15687"}},"id":"15686","type":"LinearAxis"},{"attributes":{},"id":"15751","type":"Selection"},{"attributes":{},"id":"15753","type":"Selection"}],"root_ids":["15764"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"185f07b2-891a-4aab-9568-31b3dacc7a95","root_ids":["15764"],"roots":{"15764":"f68cd3e9-a44c-4a96-8c3c-5201a14eb5b0"}}];
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