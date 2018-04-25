using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Foundation.Collections;

namespace OpenApp
{
    public sealed class App
    {
        public async void Start(string token)
        {
            var uri = new Uri("crm:");
            var valueSet = new ValueSet();
            valueSet.Add("Token", token);

            var options = new Windows.System.LauncherOptions();
            options.TargetApplicationPackageFamilyName = "de414e1b-1ad7-4507-9084-b1ceaf3644ee_kxj2s8fwx78be";

            await Windows.System.Launcher.LaunchUriAsync(uri, options, valueSet);
        }

    }
}
