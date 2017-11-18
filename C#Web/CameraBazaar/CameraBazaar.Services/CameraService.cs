using CameraBazaar.Data;
using CameraBazaar.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace CameraBazaar.Services
{
    public class CameraService : ICameraService
    {
        private readonly CameraBazaarDbContext db;

        public CameraService(CameraBazaarDbContext db)
        {
            this.db = db;
        }

        public void Create(CameraMakeType make, string model, decimal price, int quantity, int minShutterSpeed, 
            int MaxShutterSpeed, MinISOType minISO, int maxISO, bool isFullFrame, string videoResolution,
            IEnumerable<LightMeteringType> lightMetering, string description, string imageURL, string userId)
        {
            var camera = new Camera
            {
                Make = make,
                Model = model,
                Price = price,
                Quantity = quantity,
                MinShutterSpeed = minShutterSpeed,
                MaxShutterSpeed = MaxShutterSpeed,
                MinISO = minISO,
                MaxISO = maxISO,
                IsFullFrame = isFullFrame,
                VideoResolution = videoResolution,
                LightMetering = (LightMeteringType)lightMetering.Cast<int>().Sum(),
                Description = description,
                ImageURL = imageURL,
                UserId = userId
            };

            db.Cameras.Add(camera);
            db.SaveChanges();
        }
    }
}
