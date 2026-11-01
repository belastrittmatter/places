Pod::Spec.new do |s|
  s.name           = 'NearbyPlaces'
  s.version        = '1.0.0'
  s.summary        = 'Nearby place search for places via Apple MapKit'
  s.description    = 'Local Expo module exposing MapKit POI search (searchNearby) for the places app. No API key or billing required.'
  s.author         = 'Bela Strittmatter'
  s.homepage       = 'https://github.com/belastrittmatter/places'
  s.license        = { :type => 'AGPL-3.0-only' }
  s.platforms      = {
    :ios => '18.0',
    :tvos => '18.0'
  }
  s.source         = { :git => 'https://github.com/belastrittmatter/places.git' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
