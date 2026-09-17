import CoreLocation
import ExpoModulesCore
import MapKit

struct SearchOptions: Record {
  @Field
  var latitude: Double

  @Field
  var longitude: Double

  @Field
  var radiusMeters: Double = 1000

  @Field
  var query: String?

  @Field
  var limit: Int?
}

struct PlaceItem: Record {
  @Field
  var name: String = ""

  @Field
  var address: String?

  @Field
  var latitude: Double = 0

  @Field
  var longitude: Double = 0

  @Field
  var category: String?

  @Field
  var phoneNumber: String?

  @Field
  var url: String?
}

public class NearbyPlacesModule: Module {
  public func definition() -> ModuleDefinition {
    Name("NearbyPlaces")

    AsyncFunction("searchNearby") { (options: SearchOptions) async throws -> [PlaceItem] in
      let center = CLLocationCoordinate2D(latitude: options.latitude, longitude: options.longitude)
      let radius = min(max(options.radiusMeters, 50), 2000)
      let limit = min(max(options.limit ?? 10, 1), 50)
      let query = options.query?.trimmingCharacters(in: .whitespacesAndNewlines)
      let filter = MKPointOfInterestFilter(including: [
        .restaurant, .cafe, .bakery, .museum, .park, .nightlife, .foodMarket,
        .hotel, .landmark, .nationalMonument, .castle, .fortress,
        .beach, .nationalPark, .hiking, .swimming, .surfing, .marina, .campground,
        .aquarium, .zoo, .amusementPark,
        .musicVenue, .theater, .movieTheater,
        .brewery, .winery, .distillery,
        .spa, .stadium,
      ])

      let mapItems: [MKMapItem]
      if let query, !query.isEmpty {
        let span = max(radius * 2, 100)
        let request = MKLocalSearch.Request()
        request.naturalLanguageQuery = query
        request.region = MKCoordinateRegion(
          center: center,
          latitudinalMeters: span,
          longitudinalMeters: span
        )
        request.resultTypes = .pointOfInterest
        request.regionPriority = .required
        request.pointOfInterestFilter = filter
        mapItems = try await Self.start(request: request)
      } else {
        let request = MKLocalPointsOfInterestRequest(center: center, radius: radius)
        request.pointOfInterestFilter = filter
        mapItems = try await Self.start(request: request)
      }

      var seen = Set<String>()
      var places: [PlaceItem] = []
      for item in mapItems {
        guard let name = item.name, !name.isEmpty else { continue }
        let lat = item.placemark.coordinate.latitude
        let lon = item.placemark.coordinate.longitude
        let key =
          "\(name.lowercased())|\(String(format: "%.5f", lat))|\(String(format: "%.5f", lon))"
        guard seen.insert(key).inserted else { continue }
        var place = PlaceItem()
        place.name = name
        place.address = item.placemark.title
        place.latitude = lat
        place.longitude = lon
        place.category = item.pointOfInterestCategory?.rawValue
        place.phoneNumber = item.phoneNumber
        place.url = item.url?.absoluteString
        places.append(place)
        if places.count >= limit { break }
      }
      return places
    }
  }

  static func start(request: MKLocalSearch.Request) async throws -> [MKMapItem] {
    do {
      return try await MKLocalSearch(request: request).start().mapItems
    } catch {
      if (error as NSError).code == 4 {
        return []
      }
      throw error
    }
  }

  static func start(request: MKLocalPointsOfInterestRequest) async throws -> [MKMapItem] {
    do {
      return try await MKLocalSearch(request: request).start().mapItems
    } catch {
      if (error as NSError).code == 4 {
        return []
      }
      throw error
    }
  }
}
