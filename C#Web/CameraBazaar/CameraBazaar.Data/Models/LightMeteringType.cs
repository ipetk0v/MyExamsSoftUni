using System;

namespace CameraBazaar.Data.Models
{
    [Flags]
    public enum LightMeteringType
    {
        Spot = 1,
        CenterWeighted = 2,
        Evaluative = 4
    }
}
