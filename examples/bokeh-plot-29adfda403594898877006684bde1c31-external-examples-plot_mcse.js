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
    
      
      
    
      var element = document.getElementById("4b983613-86ac-49be-81a6-fbcf907a34f7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4b983613-86ac-49be-81a6-fbcf907a34f7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2c70f142-a0f3-45ff-b798-837876495b5e":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"37127","type":"Span"},{"attributes":{"data_source":{"id":"37130"},"glyph":{"id":"37129"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37132"}},"id":"37131","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"37133","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37137","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37128","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37159"},"selection_policy":{"id":"37158"}},"id":"37130","type":"ColumnDataSource"},{"attributes":{"source":{"id":"37130"}},"id":"37132","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"37140","type":"Span"},{"attributes":{},"id":"37156","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37136","type":"Circle"},{"attributes":{},"id":"37157","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37171"},"selection_policy":{"id":"37170"}},"id":"37135","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"37144"},"glyph":{"id":"37143"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37146"}},"id":"37145","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"37141","type":"Span"},{"attributes":{"below":[{"id":"37058"}],"center":[{"id":"37061"},{"id":"37065"}],"height":500,"left":[{"id":"37062"}],"output_backend":"webgl","renderers":[{"id":"37124"},{"id":"37126"},{"id":"37127"},{"id":"37128"},{"id":"37131"}],"title":{"id":"37133"},"toolbar":{"id":"37076"},"toolbar_location":null,"width":500,"x_range":{"id":"37050"},"x_scale":{"id":"37054"},"y_range":{"id":"37052"},"y_scale":{"id":"37056"}},"id":"37049","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"37135"},"glyph":{"id":"37136"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37137"},"view":{"id":"37139"}},"id":"37138","type":"GlyphRenderer"},{"attributes":{"source":{"id":"37135"}},"id":"37139","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37123","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37173"},"selection_policy":{"id":"37172"}},"id":"37144","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37164"},"major_label_policy":{"id":"37165"},"ticker":{"id":"37095"}},"id":"37094","type":"LinearAxis"},{"attributes":{},"id":"37164","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"37094"}],"center":[{"id":"37097"},{"id":"37101"}],"height":500,"left":[{"id":"37098"}],"output_backend":"webgl","renderers":[{"id":"37138"},{"id":"37140"},{"id":"37141"},{"id":"37142"},{"id":"37145"}],"title":{"id":"37147"},"toolbar":{"id":"37112"},"toolbar_location":null,"width":500,"x_range":{"id":"37086"},"x_scale":{"id":"37090"},"y_range":{"id":"37088"},"y_scale":{"id":"37092"}},"id":"37085","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"37088","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37167"},"major_label_policy":{"id":"37168"},"ticker":{"id":"37099"}},"id":"37098","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"37147","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37153"},"major_label_policy":{"id":"37154"},"ticker":{"id":"37063"}},"id":"37062","type":"LinearAxis"},{"attributes":{},"id":"37090","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"37076"},{"id":"37112"}],"tools":[{"id":"37066"},{"id":"37067"},{"id":"37068"},{"id":"37069"},{"id":"37070"},{"id":"37071"},{"id":"37072"},{"id":"37073"},{"id":"37102"},{"id":"37103"},{"id":"37104"},{"id":"37105"},{"id":"37106"},{"id":"37107"},{"id":"37108"},{"id":"37109"}]},"id":"37178","type":"ProxyToolbar"},{"attributes":{},"id":"37092","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37142","type":"Span"},{"attributes":{},"id":"37165","type":"AllLabels"},{"attributes":{"callback":null},"id":"37109","type":"HoverTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37143","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37157"},"selection_policy":{"id":"37156"}},"id":"37121","type":"ColumnDataSource"},{"attributes":{},"id":"37050","type":"DataRange1d"},{"attributes":{"source":{"id":"37144"}},"id":"37146","type":"CDSView"},{"attributes":{},"id":"37095","type":"BasicTicker"},{"attributes":{"axis":{"id":"37094"},"ticker":null},"id":"37097","type":"Grid"},{"attributes":{},"id":"37167","type":"BasicTickFormatter"},{"attributes":{},"id":"37158","type":"UnionRenderers"},{"attributes":{"children":[{"id":"37179"},{"id":"37177"}]},"id":"37180","type":"Column"},{"attributes":{},"id":"37059","type":"BasicTicker"},{"attributes":{},"id":"37159","type":"Selection"},{"attributes":{"toolbar":{"id":"37178"},"toolbar_location":"above"},"id":"37179","type":"ToolbarBox"},{"attributes":{},"id":"37054","type":"LinearScale"},{"attributes":{"axis":{"id":"37098"},"dimension":1,"ticker":null},"id":"37101","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37075","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"37062"},"dimension":1,"ticker":null},"id":"37065","type":"Grid"},{"attributes":{},"id":"37099","type":"BasicTicker"},{"attributes":{},"id":"37168","type":"AllLabels"},{"attributes":{"end":1,"start":-0.05},"id":"37052","type":"DataRange1d"},{"attributes":{"overlay":{"id":"37110"}},"id":"37104","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37150"},"major_label_policy":{"id":"37151"},"ticker":{"id":"37059"}},"id":"37058","type":"LinearAxis"},{"attributes":{"callback":null},"id":"37073","type":"HoverTool"},{"attributes":{},"id":"37103","type":"PanTool"},{"attributes":{},"id":"37067","type":"PanTool"},{"attributes":{},"id":"37102","type":"ResetTool"},{"attributes":{},"id":"37108","type":"SaveTool"},{"attributes":{},"id":"37056","type":"LinearScale"},{"attributes":{},"id":"37105","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"37111"}},"id":"37106","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37122","type":"Circle"},{"attributes":{},"id":"37063","type":"BasicTicker"},{"attributes":{},"id":"37107","type":"UndoTool"},{"attributes":{"axis":{"id":"37058"},"ticker":null},"id":"37061","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"37066"},{"id":"37067"},{"id":"37068"},{"id":"37069"},{"id":"37070"},{"id":"37071"},{"id":"37072"},{"id":"37073"}]},"id":"37076","type":"Toolbar"},{"attributes":{"overlay":{"id":"37074"}},"id":"37068","type":"BoxZoomTool"},{"attributes":{},"id":"37066","type":"ResetTool"},{"attributes":{},"id":"37086","type":"DataRange1d"},{"attributes":{},"id":"37069","type":"WheelZoomTool"},{"attributes":{},"id":"37071","type":"UndoTool"},{"attributes":{"overlay":{"id":"37075"}},"id":"37070","type":"LassoSelectTool"},{"attributes":{},"id":"37072","type":"SaveTool"},{"attributes":{},"id":"37170","type":"UnionRenderers"},{"attributes":{},"id":"37171","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37111","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"37121"},"glyph":{"id":"37122"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37123"},"view":{"id":"37125"}},"id":"37124","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37110","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"37049"},0,0],[{"id":"37085"},0,1]]},"id":"37177","type":"GridBox"},{"attributes":{},"id":"37150","type":"BasicTickFormatter"},{"attributes":{},"id":"37172","type":"UnionRenderers"},{"attributes":{},"id":"37151","type":"AllLabels"},{"attributes":{},"id":"37173","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37074","type":"BoxAnnotation"},{"attributes":{},"id":"37153","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"37102"},{"id":"37103"},{"id":"37104"},{"id":"37105"},{"id":"37106"},{"id":"37107"},{"id":"37108"},{"id":"37109"}]},"id":"37112","type":"Toolbar"},{"attributes":{},"id":"37154","type":"AllLabels"},{"attributes":{"source":{"id":"37121"}},"id":"37125","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"37126","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37129","type":"Scatter"}],"root_ids":["37180"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"2c70f142-a0f3-45ff-b798-837876495b5e","root_ids":["37180"],"roots":{"37180":"4b983613-86ac-49be-81a6-fbcf907a34f7"}}];
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