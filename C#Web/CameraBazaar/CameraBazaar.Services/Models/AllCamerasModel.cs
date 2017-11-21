using CameraBazaar.Data.Models;

namespace CameraBazaar.Services.Models
{
    public class AllCamerasModel
    {
        public int Id { get; set; }

        public CameraMakeType Make { get; set; }

        public string Model { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public int MinShutterSpeed { get; set; }

        public int MaxShutterSpeed { get; set; }

        public MinISOType MinISO { get; set; }

        public int MaxISO { get; set; }

        public bool IsFullFrame { get; set; }

        public string VideoResolution { get; set; }

        public LightMeteringType LightMetering { get; set; }

        public string Description { get; set; }

        public string ImageURL { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
