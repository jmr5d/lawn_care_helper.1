ActiveAdmin.register Property do
  permit_params :address1, :address2, :city, :state, :latitude, :longitude, :altitude, :country, :zipcode, :size_in_acres, :length_in_feet, :width_in_feet

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end


end
