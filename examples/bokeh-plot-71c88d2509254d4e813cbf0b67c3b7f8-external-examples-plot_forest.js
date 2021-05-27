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
    
      
      
    
      var element = document.getElementById("a12c6fdc-9df9-4c9c-8b00-7141a461f020");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a12c6fdc-9df9-4c9c-8b00-7141a461f020' but no matching script tag was found.")
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
                    
                  var docs_json = '{"336a8b0e-d6fa-43bc-b5f0-694ab2bb08fd":{"defs":[],"roots":{"references":[{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18703","type":"Line"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18804"},"selection_policy":{"id":"18803"}},"id":"18707","type":"ColumnDataSource"},{"attributes":{},"id":"18819","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18714","type":"Circle"},{"attributes":{},"id":"18823","type":"UnionRenderers"},{"attributes":{"source":{"id":"18702"}},"id":"18706","type":"CDSView"},{"attributes":{"data_source":{"id":"18747"},"glyph":{"id":"18748"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18749"},"view":{"id":"18751"}},"id":"18750","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18712"},"glyph":{"id":"18713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18714"},"view":{"id":"18716"}},"id":"18715","type":"GlyphRenderer"},{"attributes":{},"id":"18786","type":"Selection"},{"attributes":{},"id":"18787","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18806"},"selection_policy":{"id":"18805"}},"id":"18712","type":"ColumnDataSource"},{"attributes":{"ticks":[1.275]},"id":"18766","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18713","type":"Circle"},{"attributes":{"source":{"id":"18752"}},"id":"18756","type":"CDSView"},{"attributes":{},"id":"18817","type":"UnionRenderers"},{"attributes":{},"id":"18783","type":"UnionRenderers"},{"attributes":{},"id":"18784","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18758","type":"Circle"},{"attributes":{},"id":"18820","type":"Selection"},{"attributes":{},"id":"18824","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18704","type":"Line"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"18645"},{"id":"18650"},{"id":"18655"},{"id":"18660"},{"id":"18665"},{"id":"18670"},{"id":"18675"},{"id":"18680"},{"id":"18685"},{"id":"18690"},{"id":"18695"},{"id":"18700"}]},"id":"18769","type":"LegendItem"},{"attributes":{"children":[[{"id":"18606"},0,0]]},"id":"18828","type":"GridBox"},{"attributes":{},"id":"18822","type":"Selection"},{"attributes":{"data_source":{"id":"18707"},"glyph":{"id":"18708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18709"},"view":{"id":"18711"}},"id":"18710","type":"GlyphRenderer"},{"attributes":{},"id":"18788","type":"Selection"},{"attributes":{},"id":"18813","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18709","type":"Line"},{"attributes":{},"id":"18821","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18759","type":"Circle"},{"attributes":{},"id":"18785","type":"UnionRenderers"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18705"},{"id":"18710"},{"id":"18715"},{"id":"18720"},{"id":"18725"},{"id":"18730"},{"id":"18735"},{"id":"18740"},{"id":"18745"},{"id":"18750"},{"id":"18755"},{"id":"18760"}]},"id":"18770","type":"LegendItem"},{"attributes":{},"id":"18818","type":"Selection"},{"attributes":{"data_source":{"id":"18757"},"glyph":{"id":"18758"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18759"},"view":{"id":"18761"}},"id":"18760","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18764","type":"DataRange1d"},{"attributes":{"data":{},"selected":{"id":"18824"},"selection_policy":{"id":"18823"}},"id":"18757","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"18633"}],"tools":[{"id":"18623"},{"id":"18624"},{"id":"18625"},{"id":"18626"},{"id":"18627"},{"id":"18628"},{"id":"18629"},{"id":"18630"}]},"id":"18829","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18754","type":"Line"},{"attributes":{"source":{"id":"18707"}},"id":"18711","type":"CDSView"},{"attributes":{"toolbar":{"id":"18829"},"toolbar_location":"above"},"id":"18830","type":"ToolbarBox"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18708","type":"Line"},{"attributes":{},"id":"18790","type":"Selection"},{"attributes":{"source":{"id":"18757"}},"id":"18761","type":"CDSView"},{"attributes":{"data_source":{"id":"18692"},"glyph":{"id":"18693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18694"},"view":{"id":"18696"}},"id":"18695","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18778"},"selection_policy":{"id":"18777"}},"id":"18642","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18780"},"selection_policy":{"id":"18779"}},"id":"18647","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18744","type":"Circle"},{"attributes":{"source":{"id":"18737"}},"id":"18741","type":"CDSView"},{"attributes":{},"id":"18775","type":"BasicTickFormatter"},{"attributes":{},"id":"18796","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18658","type":"Line"},{"attributes":{},"id":"18624","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18654","type":"Circle"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18790"},"selection_policy":{"id":"18789"}},"id":"18672","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18647"}},"id":"18651","type":"CDSView"},{"attributes":{"source":{"id":"18732"}},"id":"18736","type":"CDSView"},{"attributes":{},"id":"18789","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18769"},{"id":"18770"}],"location":"top_left"},"id":"18768","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18739","type":"Line"},{"attributes":{},"id":"18798","type":"Selection"},{"attributes":{"callback":null},"id":"18630","type":"HoverTool"},{"attributes":{"data_source":{"id":"18742"},"glyph":{"id":"18743"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18744"},"view":{"id":"18746"}},"id":"18745","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18673","type":"Line"},{"attributes":{"source":{"id":"18677"}},"id":"18681","type":"CDSView"},{"attributes":{},"id":"18806","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18664","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18728","type":"Circle"},{"attributes":{},"id":"18629","type":"SaveTool"},{"attributes":{},"id":"18802","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18733","type":"Line"},{"attributes":{"overlay":{"id":"18632"}},"id":"18627","type":"LassoSelectTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18623"},{"id":"18624"},{"id":"18625"},{"id":"18626"},{"id":"18627"},{"id":"18628"},{"id":"18629"},{"id":"18630"}]},"id":"18633","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"18800"},"selection_policy":{"id":"18799"}},"id":"18697","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18724","type":"Line"},{"attributes":{},"id":"18800","type":"Selection"},{"attributes":{},"id":"18814","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"18782"},"selection_policy":{"id":"18781"}},"id":"18652","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18742"}},"id":"18746","type":"CDSView"},{"attributes":{},"id":"18779","type":"UnionRenderers"},{"attributes":{"source":{"id":"18667"}},"id":"18671","type":"CDSView"},{"attributes":{"data_source":{"id":"18737"},"glyph":{"id":"18738"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18739"},"view":{"id":"18741"}},"id":"18740","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18683","type":"Circle"},{"attributes":{},"id":"18803","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18748","type":"Line"},{"attributes":{"axis":{"id":"18619"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"18622","type":"Grid"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18663","type":"Line"},{"attributes":{},"id":"18780","type":"Selection"},{"attributes":{},"id":"18611","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18631","type":"BoxAnnotation"},{"attributes":{},"id":"18804","type":"Selection"},{"attributes":{},"id":"18613","type":"LinearScale"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18822"},"selection_policy":{"id":"18821"}},"id":"18752","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18631"}},"id":"18625","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"18687"},"glyph":{"id":"18688"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18689"},"view":{"id":"18691"}},"id":"18690","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18727"}},"id":"18731","type":"CDSView"},{"attributes":{"data_source":{"id":"18642"},"glyph":{"id":"18643"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18644"},"view":{"id":"18646"}},"id":"18645","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18747"}},"id":"18751","type":"CDSView"},{"attributes":{},"id":"18793","type":"UnionRenderers"},{"attributes":{},"id":"18809","type":"UnionRenderers"},{"attributes":{"children":[{"id":"18830"},{"id":"18828"}]},"id":"18831","type":"Column"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18792"},"selection_policy":{"id":"18791"}},"id":"18677","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18702"},"glyph":{"id":"18703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18704"},"view":{"id":"18706"}},"id":"18705","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18717"}},"id":"18721","type":"CDSView"},{"attributes":{},"id":"18794","type":"Selection"},{"attributes":{"data_source":{"id":"18677"},"glyph":{"id":"18678"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18679"},"view":{"id":"18681"}},"id":"18680","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18662"}},"id":"18666","type":"CDSView"},{"attributes":{"data_source":{"id":"18662"},"glyph":{"id":"18663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18664"},"view":{"id":"18666"}},"id":"18665","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18717"},"glyph":{"id":"18718"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18719"},"view":{"id":"18721"}},"id":"18720","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18772"},"major_label_policy":{"id":"18773"},"ticker":{"id":"18616"}},"id":"18615","type":"LinearAxis"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18678","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18669","type":"Circle"},{"attributes":{},"id":"18781","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18652"},"glyph":{"id":"18653"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18654"},"view":{"id":"18656"}},"id":"18655","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18732"},"glyph":{"id":"18733"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18734"},"view":{"id":"18736"}},"id":"18735","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18749","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18788"},"selection_policy":{"id":"18787"}},"id":"18667","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18802"},"selection_policy":{"id":"18801"}},"id":"18702","type":"ColumnDataSource"},{"attributes":{},"id":"18773","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18698","type":"Circle"},{"attributes":{},"id":"18616","type":"BasicTicker"},{"attributes":{},"id":"18626","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18699","type":"Circle"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18816"},"selection_policy":{"id":"18815"}},"id":"18737","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18679","type":"Line"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18786"},"selection_policy":{"id":"18785"}},"id":"18662","type":"ColumnDataSource"},{"attributes":{},"id":"18628","type":"UndoTool"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18798"},"selection_policy":{"id":"18797"}},"id":"18692","type":"ColumnDataSource"},{"attributes":{},"id":"18782","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"18762","type":"Title"},{"attributes":{},"id":"18812","type":"Selection"},{"attributes":{},"id":"18816","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18649","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18808"},"selection_policy":{"id":"18807"}},"id":"18717","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18674","type":"Line"},{"attributes":{},"id":"18801","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18643","type":"Line"},{"attributes":{"source":{"id":"18672"}},"id":"18676","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18818"},"selection_policy":{"id":"18817"}},"id":"18742","type":"ColumnDataSource"},{"attributes":{},"id":"18623","type":"ResetTool"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18693","type":"Line"},{"attributes":{"source":{"id":"18697"}},"id":"18701","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18688","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18718","type":"Line"},{"attributes":{"data_source":{"id":"18697"},"glyph":{"id":"18698"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18699"},"view":{"id":"18701"}},"id":"18700","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18753","type":"Line"},{"attributes":{},"id":"18811","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18722"},"glyph":{"id":"18723"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18724"},"view":{"id":"18726"}},"id":"18725","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18684","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18729","type":"Circle"},{"attributes":{"formatter":{"id":"18775"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18776"},"ticker":{"id":"18766"}},"id":"18619","type":"LinearAxis"},{"attributes":{"source":{"id":"18682"}},"id":"18686","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18719","type":"Line"},{"attributes":{"data_source":{"id":"18727"},"glyph":{"id":"18728"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18729"},"view":{"id":"18731"}},"id":"18730","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18692"}},"id":"18696","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18734","type":"Line"},{"attributes":{"source":{"id":"18657"}},"id":"18661","type":"CDSView"},{"attributes":{"axis":{"id":"18615"},"ticker":null},"id":"18618","type":"Grid"},{"attributes":{},"id":"18776","type":"AllLabels"},{"attributes":{},"id":"18792","type":"Selection"},{"attributes":{},"id":"18810","type":"Selection"},{"attributes":{},"id":"18805","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18667"},"glyph":{"id":"18668"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18669"},"view":{"id":"18671"}},"id":"18670","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18657"},"glyph":{"id":"18658"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18659"},"view":{"id":"18661"}},"id":"18660","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18694","type":"Line"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18810"},"selection_policy":{"id":"18809"}},"id":"18722","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18723","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18653","type":"Circle"},{"attributes":{},"id":"18772","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18743","type":"Circle"},{"attributes":{},"id":"18778","type":"Selection"},{"attributes":{"source":{"id":"18652"}},"id":"18656","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18648","type":"Line"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18814"},"selection_policy":{"id":"18813"}},"id":"18732","type":"ColumnDataSource"},{"attributes":{},"id":"18791","type":"UnionRenderers"},{"attributes":{},"id":"18807","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18647"},"glyph":{"id":"18648"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18649"},"view":{"id":"18651"}},"id":"18650","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18722"}},"id":"18726","type":"CDSView"},{"attributes":{},"id":"18799","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18689","type":"Line"},{"attributes":{},"id":"18777","type":"UnionRenderers"},{"attributes":{},"id":"18815","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18644","type":"Line"},{"attributes":{"source":{"id":"18642"}},"id":"18646","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18632","type":"PolyAnnotation"},{"attributes":{},"id":"18795","type":"UnionRenderers"},{"attributes":{"above":[{"id":"18768"}],"below":[{"id":"18615"}],"center":[{"id":"18618"},{"id":"18622"}],"height":348,"left":[{"id":"18619"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"18645"},{"id":"18650"},{"id":"18655"},{"id":"18660"},{"id":"18665"},{"id":"18670"},{"id":"18675"},{"id":"18680"},{"id":"18685"},{"id":"18690"},{"id":"18695"},{"id":"18700"},{"id":"18705"},{"id":"18710"},{"id":"18715"},{"id":"18720"},{"id":"18725"},{"id":"18730"},{"id":"18735"},{"id":"18740"},{"id":"18745"},{"id":"18750"},{"id":"18755"},{"id":"18760"}],"title":{"id":"18762"},"toolbar":{"id":"18633"},"toolbar_location":null,"width":450,"x_range":{"id":"18764"},"x_scale":{"id":"18611"},"y_range":{"id":"18765"},"y_scale":{"id":"18613"}},"id":"18606","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"18752"},"glyph":{"id":"18753"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18754"},"view":{"id":"18756"}},"id":"18755","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18668","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18659","type":"Line"},{"attributes":{},"id":"18808","type":"Selection"},{"attributes":{"source":{"id":"18687"}},"id":"18691","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18820"},"selection_policy":{"id":"18819"}},"id":"18747","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18682"},"glyph":{"id":"18683"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18684"},"view":{"id":"18686"}},"id":"18685","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18765","type":"DataRange1d"},{"attributes":{"data":{},"selected":{"id":"18812"},"selection_policy":{"id":"18811"}},"id":"18727","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18672"},"glyph":{"id":"18673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18674"},"view":{"id":"18676"}},"id":"18675","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18712"}},"id":"18716","type":"CDSView"},{"attributes":{},"id":"18797","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18794"},"selection_policy":{"id":"18793"}},"id":"18682","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18738","type":"Line"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18784"},"selection_policy":{"id":"18783"}},"id":"18657","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18796"},"selection_policy":{"id":"18795"}},"id":"18687","type":"ColumnDataSource"}],"root_ids":["18831"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"336a8b0e-d6fa-43bc-b5f0-694ab2bb08fd","root_ids":["18831"],"roots":{"18831":"a12c6fdc-9df9-4c9c-8b00-7141a461f020"}}];
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