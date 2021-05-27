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
    
      
      
    
      var element = document.getElementById("d64a57ff-d90b-4583-b6e3-0976d440f964");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd64a57ff-d90b-4583-b6e3-0976d440f964' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d86de440-8f5e-4c97-a5ab-d73692714bcd":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[532]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[532]}},"selected":{"id":"21144"},"selection_policy":{"id":"21143"}},"id":"21118","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"t5WyTmn88D8LTVNX89LwP/xzWdlezfA/1HbIOM7b8D+MbVwm0NTwP2LecoK2uvA/L2gW5l7e8D/QxzMW71LxP0Uy4nnKWPE/yJcYTOb68T88XtXTaIzyPw5wNc2ylvI/NlhrdwAs8z+s9HaR4sXzP5dPFIBC4/M/uUqTskys9D8YixhPXP/0P+LUOenbhPU/hCG6DNY49j++VxZMKWj2P/C3W8pPcvc/XE79h8mr+D+h8VfUMbH4P8zknkVD5fk/9xeV+uoV+j84e0ADvR77P/UMum1Qr/s/pBHiwDZY/D8UqIN+sJH9P35R9jtUyv0/gD4lPCrL/j92auP8UQIAQAAfwz25EwBArDW02w6fAEDiAIW6yzsBQNzHBB0yoQFAGsxVmYjYAUBQlyZ4RXUCQIZi91YCEgNAvi3INb+uA0D0+JgUfEsEQCrEafM46ARAYI860vWEBUCWWguxsiEGQGRnTF34MQZAziXcj2++BkB1oLOnkzsHQATxrG4sWwdAWFk5QeS3B0A6vH1N6fcHQHFII3JmCAhA4zyNyKA/CEDHsdeqdVYIQJDHtnjzWQhAmEBe6BlQCED9m7A3A0AIQGbWdgRxLQhAQGyj9j4QCEA6vH1N6fcHQAeD5Sh14gdA0DQuMr2lB0BFNt31f2MHQATxrG4sWwdA9EmZkHUaB0BR8EwqgsQGQM4l3I9vvgZAMdzm3XFYBkCWWguxsiEGQBKXfB9Q2wVAYI860vWEBUAg/vHwzFkFQCrEafM46ARAbo88fGHPBED0+JgUfEsEQDLZXDknKgRAvi3INb+uA0Dsx09ERmIDQIZi91YCEgNAwjsnD0KNAkBQlyZ4RXUCQBrMVZmI2AFAR0FN1l2wAUDiAIW6yzsBQKw1tNsOnwBA0s3olfSeAEB2auP8UQIAQIA+JTwqy/4/2lWm6hjV/T8UqIN+sJH9P6MR4sA2WPw/OHtAA70e+z/M5J5FQ+X5P1xO/YfJq/g/8Ldbyk9y9z+EIboM1jj2P6F5I8W6KvU/GIsYT1z/9D+s9HaR4sXzPxS2GU77fvM/PF7V02iM8j9vrJqIFlbyP9bG5RlOcPE/0MczFu9S8T+3lbJOafzwPw==","dtype":"float64","order":"little","shape":[104]},"y":{"__ndarray__":"EEsYxnI69z+gnsuYFlL4PzLyfmu6afk/xEUyPl6B+j9WmeUQApn7P+jsmOOlsPw/eEBMtknI/T9MUds6idL+PwiU/4jt3/4/nOeyW5H3/z8EABiP230AQJYdM5eahwBAYMeMgGwTAUDyojjgKIcBQChx5mk+nwFA8BpAUxArAkDeBL03d2ECQLrEmTzitgJAanlhzUAoA0CCbvMltEIDQEwYTQ+GzgNALHOD4AJYBEAUwqb4V1oEQAC079K50wRA3GsA4inmBEAOfCJiwUQFQKYVWsv7cQVAJCVLQh6kBUACVocWv/AFQG6/s7TN/QVA8lU61do5BkAY2W0pOYIGQDZpDZ6fiQZAPh9SK6vFBkBKB45+XvoGQAATZ4dxFQdAEkCmYEIkB0Cjhy5e/0YHQAThjhybZgdAhLlQuAF9B0AxoUvoH38HQHjDCBXfZgdAqjiuLjVAB0AVTm5woBoHQAATZ4dxFQdAjs0RlNvdBkA2aQ2en4kGQExibk8/bQZAbr+ztM39BUDopv6dsI8FQKYVWsv7cQVA3GsA4inmBEAUwqb4V1oEQEwYTQ+GzgNAgm7zJbRCA0C6xJk84rYCQPAaQFMQKwJAKHHmaT6fAUBQRILXVlMBQGDHjIBsEwFAlh0zl5qHAECd57Jbkff/P6ATYkwd2P8/CJT/iO3f/j95QEy2Scj9P3Zw9koquP0/6OyY46Ww/D/SwW9xXjn8P1aZ5RACmfs/WOIPg/na+j/ERTI+XoH6P0Llno3+lfk/MvJ+a7pp+T/MEaxVR4X4P6Cey5gWUvg/mFqu9p+i9z8QSxjGcjr3P+WLsFg/0vY/fvdk884i9j/ogHSFPQT2P4e1WdMGPPU/7KOxICsL9T/8+KHaaYf0P715zGia8/M/XFD+TYfz8z+w3J6YaYjzP6Okj+SaJfM/yvxKe+Pb8j9TW2Y/eMjyP9pLaVathPI/VP8l6+5Z8j9mhFJzp0PyP0SB3Ab6TfI/BKrxPD1u8j/9OjfRXZfyP8r8Snvj2/I/xz53V8zp8j9/u8PtL7LzP1xQ/k2H8/M/cREiBZzT9D/ro7EgKwv1P373ZPPOIvY/NTOyG3Rg9j8QSxjGcjr3Pw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"21148"},"selection_policy":{"id":"21147"}},"id":"21128","type":"ColumnDataSource"},{"attributes":{},"id":"21100","type":"PanTool"},{"attributes":{},"id":"21147","type":"UnionRenderers"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21119","type":"Patch"},{"attributes":{"toolbars":[{"id":"21109"}],"tools":[{"id":"21099"},{"id":"21100"},{"id":"21101"},{"id":"21102"},{"id":"21103"},{"id":"21104"},{"id":"21105"},{"id":"21106"}]},"id":"21153","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21107","type":"BoxAnnotation"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21124","type":"Patch"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21129","type":"Patch"},{"attributes":{"overlay":{"id":"21108"}},"id":"21103","type":"LassoSelectTool"},{"attributes":{},"id":"21140","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21108","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"21107"}},"id":"21101","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"21137"},"major_label_policy":{"id":"21138"},"ticker":{"id":"21092"}},"id":"21091","type":"LinearAxis"},{"attributes":{},"id":"21143","type":"UnionRenderers"},{"attributes":{"source":{"id":"21123"}},"id":"21127","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21120","type":"Patch"},{"attributes":{},"id":"21096","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[314]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[314]}},"selected":{"id":"21146"},"selection_policy":{"id":"21145"}},"id":"21123","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"21106","type":"HoverTool"},{"attributes":{},"id":"21137","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"21123"},"glyph":{"id":"21124"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21125"},"view":{"id":"21127"}},"id":"21126","type":"GlyphRenderer"},{"attributes":{},"id":"21087","type":"LinearScale"},{"attributes":{"source":{"id":"21118"}},"id":"21122","type":"CDSView"},{"attributes":{"end":6.503858260554985,"start":-2.1666182019981797},"id":"21134","type":"Range1d"},{"attributes":{},"id":"21146","type":"Selection"},{"attributes":{"end":6.822656290763559,"start":-2.8969225236036396},"id":"21133","type":"Range1d"},{"attributes":{"data_source":{"id":"21128"},"glyph":{"id":"21129"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21130"},"view":{"id":"21132"}},"id":"21131","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"21095"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21098","type":"Grid"},{"attributes":{"below":[{"id":"21091"}],"center":[{"id":"21094"},{"id":"21098"}],"height":500,"left":[{"id":"21095"}],"output_backend":"webgl","renderers":[{"id":"21121"},{"id":"21126"},{"id":"21131"}],"title":{"id":"21135"},"toolbar":{"id":"21109"},"toolbar_location":null,"width":500,"x_range":{"id":"21133"},"x_scale":{"id":"21087"},"y_range":{"id":"21134"},"y_scale":{"id":"21089"}},"id":"21082","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21125","type":"Patch"},{"attributes":{},"id":"21135","type":"Title"},{"attributes":{"axis":{"id":"21091"},"grid_line_color":null,"ticker":null},"id":"21094","type":"Grid"},{"attributes":{},"id":"21138","type":"AllLabels"},{"attributes":{"source":{"id":"21128"}},"id":"21132","type":"CDSView"},{"attributes":{"toolbar":{"id":"21153"},"toolbar_location":"above"},"id":"21154","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"21140"},"major_label_policy":{"id":"21141"},"ticker":{"id":"21096"}},"id":"21095","type":"LinearAxis"},{"attributes":{},"id":"21099","type":"ResetTool"},{"attributes":{},"id":"21104","type":"UndoTool"},{"attributes":{},"id":"21144","type":"Selection"},{"attributes":{"children":[{"id":"21154"},{"id":"21152"}]},"id":"21155","type":"Column"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21130","type":"Patch"},{"attributes":{},"id":"21141","type":"AllLabels"},{"attributes":{},"id":"21089","type":"LinearScale"},{"attributes":{"data_source":{"id":"21118"},"glyph":{"id":"21119"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21120"},"view":{"id":"21122"}},"id":"21121","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"21099"},{"id":"21100"},{"id":"21101"},{"id":"21102"},{"id":"21103"},{"id":"21104"},{"id":"21105"},{"id":"21106"}]},"id":"21109","type":"Toolbar"},{"attributes":{},"id":"21145","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"21082"},0,0]]},"id":"21152","type":"GridBox"},{"attributes":{},"id":"21102","type":"WheelZoomTool"},{"attributes":{},"id":"21092","type":"BasicTicker"},{"attributes":{},"id":"21105","type":"SaveTool"},{"attributes":{},"id":"21148","type":"Selection"}],"root_ids":["21155"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"d86de440-8f5e-4c97-a5ab-d73692714bcd","root_ids":["21155"],"roots":{"21155":"d64a57ff-d90b-4583-b6e3-0976d440f964"}}];
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