using CameraBazaar.Data;
using CameraBazaar.Data.Models;
using System.Collections.Generic;
using System.Linq;
using CameraBazaar.Services.Models;

namespace CameraBazaar.Services
{
    public class CameraService : ICameraService
    {
        private readonly CameraBazaarDbContext db;

        public CameraService(CameraBazaarDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<AllCamerasModel> All()
        {
            return this.db
                .Cameras
                .Select(c => new AllCamerasModel
                {
                    Id = c.Id,
                    Make = c.Make,
                    Model = c.Model,
                    Price = c.Price,
                    Quantity = c.Quantity,
                    MinShutterSpeed = c.MinShutterSpeed,
                    MaxShutterSpeed = c.MaxShutterSpeed,
                    MinISO = c.MinISO,
                    MaxISO = c.MaxISO,
                    IsFullFrame = c.IsFullFrame,
                    VideoResolution = c.VideoResolution,
                    LightMetering = c.LightMetering,
                    Description = c.Description,
                    ImageURL = c.ImageURL,
                    UserId = c.UserId
                }).ToList();
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

        public AllCamerasModel Details(int id)
        {
            return this.db
                 .Cameras
                 .Where(c => c.Id == id)                 
                 .Select(c => new AllCamerasModel
                 {
                     Id = c.Id,
                     Make = c.Make,
                     Model = c.Model,
                     Price = c.Price,
                     Quantity = c.Quantity,
                     MinShutterSpeed = c.MinShutterSpeed,
                     MaxShutterSpeed = c.MaxShutterSpeed,
                     MinISO = c.MinISO,
                     MaxISO = c.MaxISO,
                     IsFullFrame = c.IsFullFrame,
                     VideoResolution = c.VideoResolution,
                     LightMetering = c.LightMetering,
                     Description = c.Description,
                     ImageURL = c.ImageURL,
                     UserId = c.UserId
                 })
                 .FirstOrDefault();
        }
    }
}
