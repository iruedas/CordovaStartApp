using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenApp
{
    public sealed class App
    {
        public void Start(string url)
        {
            var uri = new Uri(url);
            Windows.System.Launcher.LaunchUriAsync(uri);
        }

    }
}
