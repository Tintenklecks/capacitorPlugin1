package de.ibmobile.capacitor.hugo;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "hugoClass")
public class hugoClassPlugin extends Plugin {

    private hugoClass implementation = new hugoClass();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo("%%%" + value));
        call.resolve(ret);
    }
}
